import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import { FaWindowClose } from "react-icons/fa";
import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderFunction } from "@remix-run/node";
import { cadGrupo, delGrupo, getGrupo } from "@/utils/aluno.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const grupo = await getGrupo(params.id);

  return json(grupo);
};
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  let values = Object.fromEntries(formData);

  if (values._action === "update") {
    await cadGrupo(values);
  } else {
    await delGrupo(values);
  }

  return redirect(`..`);
}
export default function Editar() {
  const grupo = useLoaderData();
  const navigate = useNavigate();
  function closeHandler() {
    navigate(-1);
  }

  return (
    <Modal onClose={closeHandler}>
      <Form
        method="post"
        className="font-semibold grid space-x-2 space-y-4 grid-cols-1 ">
        <div className=" text-center mb-4">Editar Grupo</div>
        <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
          <Label htmlFor="grupo">Grupo</Label>
          <input hidden type="text" name="id" defaultValue={grupo.id} />
          <Input
            type="text"
            id="grupo"
            name="grupo"
            placeholder="Grupo"
            className="w-full"
            defaultValue={grupo.nome}
          />
          <Label htmlFor="grupo">Número de Integrantes</Label>
          <Input
            type="number"
            name="numero"
            id="numero"
            placeholder="Número de Membros"
            defaultValue={grupo.numero}
          />
        </div>
        <div className="grid w-full grid-cols-2 max-w-sm items-center gap-1.5">
          <Label htmlFor="inicio">Início</Label>
          <input
            type="date"
            id="inicio"
            name="inicio"
            className="w-full p-2 rounded-xl my-2"
            defaultValue={new Date(grupo.inicio).toISOString().substring(0, 10)}
          />
          <Label htmlFor="fim">Fim</Label>
          <input
            type="date"
            id="fim"
            name="fim"
            className="w-full p-2 rounded-xl my-2"
            defaultValue={new Date(grupo.fim).toISOString().substring(0, 10)}
          />
        </div>
        <div className="flex place-content-end gap-2">
          <Button name="_action" value="update" type="submit">
            Salvar
          </Button>
          <Button
            variant="destructive"
            name="_action"
            value="delete"
            type="submit">
            Apagar
          </Button>
        </div>
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
