import { getAlunoNome } from "@/utils/aluno.server";
import { json, type LoaderArgs, type LoaderFunction } from "@remix-run/node";
import { FaUserCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Outlet, useFetcher, useLoaderData } from "@remix-run/react";
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

        <Table className="w-1/2 ">
          <TableCaption>Alunos </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Matrícula</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alunos?.map((aluno: any) => (
              <TableRow key={aluno.idMember}>
                <TableCell className="font-medium">{aluno.idMember}</TableCell>
                <TableCell>{aluno.firstName + " " + aluno.lastName}</TableCell>
                <TableCell>
                  <Link
                    to={`/aluno/planejamento/${aluno.idMember}`}
                    className="text-green-600 text-lg ">
                    <FaUserCheck className="text-lg" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Outlet />
    </>
  );
}
