import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, Link, useNavigate } from "@remix-run/react";
import { FaWindowClose } from "react-icons/fa";
import { redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { cadGrupo } from "@/utils/aluno.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  let values = Object.fromEntries(formData);
  const grupo = await cadGrupo(values);

  return redirect(`..`);
}
export default function Novo() {
  const navigate = useNavigate();
  function closeHandler() {
    navigate(-1);
  }

  return (
    <Modal onClose={closeHandler}>
      <Form
        method="post"
        className="font-semibold grid space-x-2 space-y-4 grid-cols-1 ">
        <div className=" text-center mb-4">Novo Grupo</div>
        <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
          <Label htmlFor="grupo">Grupo</Label>
          <Input
            type="text"
            id="grupo"
            name="grupo"
            placeholder="Grupo"
            className="w-full"
          />
          <Label htmlFor="grupo">Número de Integrantes</Label>
          <Input
            type="number"
            name="numero"
            id="numero"
            placeholder="Número de Membros"
          />
        </div>
        <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
          <Label htmlFor="inicio">Início</Label>
          <input
            type="date"
            id="inicio"
            name="inicio"
            className="w-full p-2 rounded-xl my-2"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
          <Label htmlFor="fim">Fim</Label>
          <input
            type="date"
            id="fim"
            name="fim"
            className="w-full p-2 rounded-xl my-2"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>

        <Button type="submit">Cadastrar</Button>
      </Form>

      <div className="  mt-4  flex place-content-end">
        <Button variant="secondary">
          <Link to=".." className="  flex items-center space-x-2  ">
            <div>
              <FaWindowClose />
            </div>
            <div>Sair</div>
          </Link>
        </Button>
      </div>
    </Modal>
  );
}
