import { getAlunoNome } from "@/utils/aluno.server";
import { json, type LoaderFunction } from "@remix-run/node";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Outlet, useFetcher } from "@remix-run/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const par = url.searchParams.get("aluno");
  const alunos = await getAlunoNome(par);

  return json({ alunos });
};

export default function Planejamento() {
  const nome = useFetcher();
  const alunos = nome.data?.alunos;

  return (
    <>
      <div className=" container mx-auto p-3">
        <nome.Form method="get" action=".">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input name="aluno" type="search" placeholder="Pesquisar Aluno" />
            <Button name="" className=" bg-stone-400" type="submit">
              Pesquisar
            </Button>
          </div>
        </nome.Form>

        <Table>
          <TableCaption>Alunos </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Matrícula</TableHead>
              <TableHead>Nome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alunos?.map((aluno: any) => (
              <TableRow key={aluno.idMember}>
                <TableCell className="font-medium">{aluno.idMember}</TableCell>
                <Link to={`/aluno/planejamento/${aluno.idMember}`}>
                  <TableCell>
                    {aluno.lastName === null
                      ? aluno.firstName
                      : aluno.firstName + " " + aluno.lastName}
                  </TableCell>
                </Link>

                {/* <TableCell>
                  
                    <FaUserCheck className="text-lg" />
                  </Link>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Outlet />
    </>
  );
}
