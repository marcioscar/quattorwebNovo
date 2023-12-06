import {
  deleteTreinoPlanejadoDia,
  getAluno,
  getHistorico,
  updateFicha,
} from "@/utils/aluno.server";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect, type LoaderFunction } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import _ from "lodash";
import { AiFillEdit } from "react-icons/ai";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const loader: LoaderFunction = async ({ request, params }) => {
  const alunoa = await getAluno(Number(params.idaluno));
  const aluno = alunoa[0];

  const historico = await getHistorico(Number(params.idaluno));
  return json({ aluno, historico });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let values = Object.fromEntries(form);
  const _action = form.get("_action");
  if (_action === "delete") {
    //  await deleteTreinoPlanejado(values);
    await deleteTreinoPlanejadoDia(values);
  }
  if (_action === "salvar") {
    await updateFicha(values);
  }

  return redirect(`.`);
};

export default function Idaluno() {
  const { aluno, historico } = useLoaderData();
  const ultimosTreinos = _.takeRight(historico?.treinos, 3);

  const transition = useTransition();

  // const PlaneTreino = _.mapValues(
  //   _.orderBy(historico.planejados, ["data", "asc"]),
  //   function (o) {
  //     const dt = o.data;
  //     const data = format(new Date(o.data), "EEEEEE - dd/MM", {
  //       locale: ptBR,
  //     });
  //     return { treino: o.treinoP, data, dt };
  //   }
  // );

  // const PlaneTreino = _.mapValues(
  //   _.orderBy(historico?.planejados, ["data", "asc"]),
  //   function (o) {
  //     const dt = o.data;
  //     const feito = o.feito;
  //     const data = format(new Date(o.data), "EEEEEE - dd/MM", {
  //       locale: ptBR,
  //     });
  //     return { treino: o.treinoP, data, dt, feito };
  //   }
  // );

  const PlaneTreino = _.mapValues(historico?.planejados, function (o) {
    return { treino: o.treinoP, dia: o.dia, id: o.id };
  });

  const plano = _.map(PlaneTreino, (treino: any) => {
    return treino;
  });

  // const grupotreino = _.map(
  //   _.groupBy(PlaneTreino, "data"),
  //   (data, idx, teste) => {
  //     return { data: idx, treino: data, dt: teste };
  //   }
  // );
  const hitTreino = _.mapValues(historico?.treinos, function (o) {
    const data = format(new Date(o.data), "EEEEEE - dd/MM", {
      locale: ptBR,
    });
    return { treino: o.treino, data };
  });
  const grupotreinoFeito = _.map(_.groupBy(hitTreino, "data"), (data, idx) => {
    return { data: idx, treino: data };
  });

  const grupotreino = _.map(
    _.groupBy(PlaneTreino, "data"),
    (data: any, idx: any, dt: any, feito: any) => {
      return { data: idx, treino: data, dt: dt, feito: feito };
    }
  );

  const ultimos = _.takeRight(grupotreino, 7);
  const ultimosFeitos = _.takeRight(grupotreinoFeito, 7);

  return (
    <div>
      <Outlet />
      <Form method="post">
        <input
          hidden
          type="number"
          name="aluno"
          readOnly
          defaultValue={aluno.idMember}
        />
        <Card className="w-full md:w-11/12 mt-2 mx-auto  ">
          <CardContent className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-1 items-center justify-between ">
              <div className="flex items-center space-x-2 mt-3">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src={aluno.photoUrl ? aluno.photoUrl : `/user.png`}
                  />
                  <AvatarFallback>Foto</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <p className=" font-medium  text-lg leading-none">
                    {aluno.firstName}
                  </p>

                  <p className="text-sm text-stone-400 text-muted-foreground">
                    {_.filter(aluno.memberships, {
                      membershipStatus: "active",
                    }).map((n) => n.name)}
                  </p>
                  <p>Matrícula - {aluno.idMember}</p>
                </div>
              </div>
              {/* <div className="font-medium flex justify-self-end   text-green-600"> */}
              <div
                className={
                  historico?.nivel === "iniciante"
                    ? " bg-red-600 text-white  rounded-md font-medium flex justify-self-center md:justify-self-end"
                    : historico?.nivel === "intermediario"
                    ? "bg-orange-500 text-white  rounded-md font-medium flex justify-self-center md:justify-self-end"
                    : "bg-green-500 text-white rounded-md font-medium flex justify-self-center md:justify-self-end"
                }>
                <Select name="nivel" defaultValue={historico?.nivel}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Nível do Aluno" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iniciante">Iniciante</SelectItem>
                    <SelectItem value="intermediario">Intermediário</SelectItem>
                    <SelectItem value="avancado">Avançado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Link
                className="bg-blue-500 text-white w-[180px] font-medium justify-self-center text-sm  md:mt-0 mt-2 rounded-md text-center  p-2"
                to={"feito"}>
                Lançar Treino
              </Link>

              {/* <input
                className="font-medium text-right text-green-600 border-b p-2"
                type="text"
                name="nivel"
                defaultValue={historico?.nivel}
                placeholder="Nível"
              /> */}
            </div>
            <div className="grid grid-cols-1  ">
              <div className="">
                <div className="">
                  <p className="font-medium text-stone-500">Histórico</p>
                  <textarea
                    className=" block p-1 w-full text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // type="text"
                    name="historico"
                    defaultValue={historico?.historico}
                    rows={4}
                  />
                </div>
              </div>
              <div className="">
                <p className="font-medium text-stone-500">Patologias</p>
                <textarea
                  className=" block p-1 w-full   text-gray-900 bg-stone-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // type="text"
                  name="patologias"
                  defaultValue={historico?.patologias}
                  rows={4}
                />
              </div>
            </div>
            <button
              name="_action"
              value="salvar"
              // variant="secondary"
              className="bg-green-300  text-black py-2 px-1 rounded-md">
              {transition.state === "submitting"
                ? "Atualizando..."
                : "Atualizar"}
            </button>
          </CardContent>
        </Card>
      </Form>
      <div className="w-full  ">
        <div>
          {ultimos && (
            <>
              <h2 className="   text-stone-600 rounded-md font-semibold  text-center text-lg m-4">
                Treinos Planejados
              </h2>
              <div className="text-stone-600 text-center place-content-center gap-2 container mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Segunda</CardTitle>
                    <CardDescription>
                      {plano
                        .filter((o) => o.dia?.includes("segunda"))
                        .map((s, index) => (
                          <div key={index} className="">
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="segunda"
                              />
                              <Link to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Terça</CardTitle>
                    <CardDescription>
                      {plano
                        .filter((o) => o.dia?.includes("terca"))
                        .map((s, index) => (
                          <div key={index} className="">
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="terca"
                              />
                              <Link to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="">
                  <CardHeader>
                    <CardTitle>Quarta</CardTitle>
                    <CardDescription>
                      {plano
                        .filter((o) => o.dia?.includes("quarta"))
                        .map((s, index) => (
                          <div key={index} className="">
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="quarta"
                              />
                              <Link to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="">
                  <CardHeader>
                    <CardTitle>Quinta</CardTitle>
                    <CardDescription>
                      {plano
                        .filter((o) => o.dia?.includes("quinta"))
                        .map((s, index) => (
                          <div key={index} className="">
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="quinta"
                              />
                              <Link to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="">
                  <CardHeader>
                    <CardTitle>Sexta</CardTitle>
                    <CardDescription>
                      {plano
                        .filter((o) => o.dia?.includes("sexta"))
                        .map((s, index) => (
                          <div key={index}>
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="sexta"
                              />
                              <Link to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="">
                  <CardHeader>
                    <CardTitle>Sábado</CardTitle>
                    <CardDescription className=" ">
                      {plano
                        .filter((o) => o.dia?.includes("sabado"))
                        .map((s, index) => (
                          <div key={index}>
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="sabado"
                              />
                              <Link
                                // className="bg-green-400 mt-3 w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2"
                                to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="">
                  <CardHeader>
                    <CardTitle>Domingo</CardTitle>
                    <CardDescription>
                      {plano
                        .filter((o) => o.dia?.includes("domingo"))
                        .map((s, index) => (
                          <div key={index} className="">
                            <Form
                              method="post"
                              className="flex  place-content-between items-center">
                              {s.treino}
                              <input
                                type="text"
                                value={s.treino}
                                hidden
                                name="treino"
                                readOnly
                              />
                              <input
                                hidden
                                type="number"
                                name="aluno"
                                readOnly
                                defaultValue={aluno.idMember}
                              />
                              <input
                                type="text"
                                hidden
                                name="dia"
                                defaultValue="domingo"
                              />
                              <Link
                                // className="bg-green-400 mt-3 w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2"
                                to={s.id}>
                                <AiFillEdit className="w-5 h-5  text-teal-500" />
                              </Link>
                              {/* <button name="_action" value="delete">
                                <AiFillCloseCircle className="w-5 h-5  text-red-500" />
                              </button> */}
                            </Form>
                          </div>
                        ))}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>

      <Link
        className="bg-green-500 mt-3 text-white w-1/2 container md:w-1/4 rounded-lg text-center block mb-24 p-2"
        to={"novo"}>
        Planejar Treinos
      </Link>
      {ultimosTreinos.length > 0 && (
        <>
          <h2 className="  text-stone-500 font-medium mb-1 text-center mt-2">
            ÚLTIMOS TREINOS
          </h2>
          <div className="text-stone-600 text-center place-content-center gap-2 container mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl">
            {ultimosFeitos.map((u: any, index) => (
              <div key={index} className="">
                <Card className=" h-full ">
                  <CardHeader>
                    <CardTitle>{u.data}</CardTitle>
                    {u.treino.map((t: any, index: any) => (
                      <CardDescription key={index}>{t.treino}</CardDescription>
                    ))}
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
