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
import { redirect } from "@remix-run/node";
import { updatePlanejamento } from "@/utils/aluno.server";
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

export const loader: LoaderFunction = async ({ request, params }) => {
  const grupos = treinos;
  return grupos;
};
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let values = Object.fromEntries(form);
  var dias = [];

  if (values.segunda) {
    dias.push("segunda");
  }
  if (values.terca) {
    dias.push("terca");
  }
  if (values.quarta) {
    dias.push("quarta");
  }
  if (values.quinta) {
    dias.push("quinta");
  }
  if (values.sexta) {
    dias.push("sexta");
  }
  if (values.sabado) {
    dias.push("sabado");
  }
  if (values.domingo) {
    dias.push("domingo");
  }

  const planejado = await updatePlanejamento(values, dias);

  return redirect(`..`);
};
export default function Novo() {
  const { grupos } = useLoaderData();

  const { aluno } = useRouteLoaderData("routes/aluno/planejamento/$idaluno");

  const [open, setOpen] = useState(false);
  const [treino, setTreino] = useState("");

  const navigate = useNavigate();
  function closeHandler() {
    navigate(-1);
  }
  const [date, setDate] = useState();

  return (
    <Modal onClose={closeHandler}>
      <Form
        method="post"
        className="font-semibold grid space-x-2 space-y-4 grid-cols-1 md:grid-cols-2 ">
        <div className=" md:col-span-2 text-center mb-4">
          Planejamento de treino - {aluno.firstName}{" "}
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className=" text-stone-500 justify-between">
              {treino.toUpperCase()
                ? grupos.find(
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
                {grupos.map((grupo: any) => (
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
          {/* <input hidden required value={date} id="data" name="data" /> */}
          <input hidden value={aluno.idMember} id="aluno" name="aluno" />
          <input hidden value={treino} name="treino" id="treino"></input>
          <Input
            className="md:col-span-2"
            type="text"
            id="treinolivre"
            name="treinolivre"
            placeholder="Treino Livre"
          />
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start font-normal",
                  !date && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "ccc, dd/MM", { locale: ptBR })
                ) : (
                  <span>Selecione a data:</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}
        </div>
        <div className="grid grid-cols-3 md:flex items-center ">
          <div className="md:flex">
            <Checkbox id="segunda" name="segunda" className="mr-1" />
            <label
              htmlFor="segunda"
              className="text-sm  mr-7  text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Segunda
            </label>
          </div>
          <div className="md:flex">
            <Checkbox id="terca" name="terca" className="mr-1" />
            <label
              htmlFor="terca"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Terça
            </label>
          </div>
          <div className="md:flex">
            <Checkbox id="quarta" name="quarta" className="mr-1" />
            <label
              htmlFor="quarta"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Quarta
            </label>
          </div>
          <div className="md:flex">
            <Checkbox id="quinta" name="quinta" className="mr-1" />
            <label
              htmlFor="quinta"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Quinta
            </label>
          </div>
          <div className="md:flex">
            <Checkbox id="sexta" name="sexta" className="mr-1" />
            <label
              htmlFor="sexta"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sexta
            </label>
          </div>
          <div className="md:flex">
            <Checkbox id="sabado" name="sabado" className="mr-1" />
            <label
              htmlFor="sabado"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sábado
            </label>
          </div>
          <div className="md:flex">
            <Checkbox id="domingo" name="domingo" className="mr-1" />
            <label
              htmlFor="domingo"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Domingo
            </label>
          </div>
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
