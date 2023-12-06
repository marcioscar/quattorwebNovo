import { getAlunoNome, getGrupos, updateGrupo } from "@/utils/aluno.server";
import { json, type LoaderFunction, redirect } from "@remix-run/node";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ActionArgs } from "@remix-run/node";
import Modal from "@/components/Modal";
import { FaWindowClose } from "react-icons/fa";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const par = url.searchParams.get("aluno");
  const alunos = await getAlunoNome(par);
  const grupos = await getGrupos();

  return json({ alunos, grupos });
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  let values = Object.fromEntries(formData);

  const grupo = await updateGrupo(values);

  return redirect(`..`);
}
export default function Grupo() {
  const { grupos } = useLoaderData();

  const grupoFilter = grupos.filter(
    (grupo: any) => grupo.alunos.length < grupo.numero
  );
  const nome = useFetcher();
  const alunos = nome.data?.alunos;

  const navigate = useNavigate();
  function closeHandler() {
    navigate(-1);
  }
  return (
    <>
      <Modal onClose={closeHandler}>
        <div className=" container mx-auto p-3">
          <nome.Form method="get" action=".">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input name="aluno" type="search" placeholder="Pesquisar Aluno" />
              <Button
                name="_action"
                value="search"
                className=" bg-stone-400"
                type="submit">
                Pesquisar
              </Button>
            </div>
          </nome.Form>
          {alunos && (
            <ul className=" space-y-2 mt-4">
              <div className="grid grid-cols-12 py-2 gap-2">
                <div className="col-span-2 hidden md:block font-light text-sm text-stone-500">
                  Matricula
                </div>
                <div className="col-span-4 font-light text-sm text-stone-500">
                  Nome
                </div>
                <div className="col-span-3 text-center font-light text-sm text-stone-500">
                  Grupo
                </div>
              </div>
              {alunos?.map((aluno: any) => (
                <li key={aluno.idMember}>
                  <Form method="post">
                    <input
                      hidden
                      name="idMember"
                      value={aluno.idMember}></input>
                    <input
                      hidden
                      name="nome"
                      value={
                        aluno.lastName === null
                          ? aluno.firstName
                          : aluno.firstName + " " + aluno.lastName
                      }></input>
                    <input hidden name="photo" value={aluno.photoUrl}></input>

                    <div className="grid md:grid-cols-12  gap-2">
                      <div className=" hidden md:block md:col-span-2">
                        {aluno.idMember}
                      </div>
                      <div className="col-span-4">
                        {aluno.lastName === null
                          ? aluno.firstName
                          : aluno.firstName + " " + aluno.lastName}
                      </div>
                      <div className=" col-span-3">
                        <Select name="grupo">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Grupo Atividades" />
                          </SelectTrigger>
                          <SelectContent>
                            {grupoFilter.map((g: any) => (
                              <SelectItem key={g.id} value={g.id}>
                                {g.nome}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className=" col-span-1">
                        <Button
                          name="_action"
                          value="grupo"
                          className=" bg-green-400"
                          type="submit">
                          Cadastrar
                        </Button>
                      </div>
                    </div>
                  </Form>
                </li>
              ))}
            </ul>
          )}

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
        </div>
      </Modal>
    </>
  );
}
