import Modal from "~/components/Modal";
import {
  Form,
  Link,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "@remix-run/react";
import { FaWindowClose } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  getHistorico,
  updateHistorico,
  updatePlanejamento,
} from "@/utils/aluno.server";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { treinos } from "@/utils/treinos.server";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { getSession } from "@/session.server";
import _ from "lodash";

export const loader: LoaderFunction = async ({ request, params }) => {
  const grupos = treinos;
  return grupos;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let values = Object.fromEntries(form);
  console.log(values);

  const test = await updateHistorico(values);

  return redirect(`..`);
};

export default function Feito() {
  const grupos = useLoaderData();

  const { aluno } = useRouteLoaderData("routes/aluno/planejamento/$idaluno");

  const [open, setOpen] = useState(false);
  const [treino, setTreino] = useState("");

  const navigate = useNavigate();
  function closeHandler() {
    navigate(-1);
  }

  return (
    <Modal onClose={closeHandler}>
      <Form
        method="post"
        className="font-semibold grid space-x-2 space-y-4 grid-cols-1">
        <div className=" md:col-span-2 text-center mb-4">
          Lançar treino para - {aluno.firstName}{" "}
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className=" text-stone-500 justify-between">
              {treino.toUpperCase()
                ? grupos.grupos.find(
                    (grupo: any) =>
                      grupo.value.toUpperCase() == treino.toUpperCase()
                  )?.label
                : "Selecione o Treino.."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Procurar Treino..." />
              <CommandEmpty>Treino não encontrado</CommandEmpty>
              <CommandGroup>
                {grupos.grupos.map((grupo: any) => (
                  <CommandItem
                    key={grupo.value}
                    onSelect={(currentValue) => {
                      setTreino(
                        currentValue == treino.toUpperCase()
                          ? ""
                          : currentValue.toUpperCase()
                      );
                      setOpen(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        treino.toUpperCase() == grupo.value.toUpperCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {grupo.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <div className=" text-left">
          <input hidden value={aluno.idMember} id="aluno" name="aluno" />
          <input hidden value={treino} name="treino" id="treino"></input>
          <Input
            className="md:col-span-2"
            type="text"
            id="treinolivre"
            name="treinolivre"
            placeholder="Treino Livre"
          />
        </div>

        <Button
          variant="secondary"
          className="bg-stone-400 md:col-span-2 text-black ">
          Salvar
        </Button>
      </Form>
      <div className=" flex place-content-end">
        <Link to=".." className="m-4 text-xl ">
          <FaWindowClose className=" font-semibold text-3xl text-stone-600 " />
        </Link>
      </div>
    </Modal>
  );
}
