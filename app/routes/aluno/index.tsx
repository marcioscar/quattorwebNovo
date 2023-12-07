import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useLoaderData, useTransition } from "@remix-run/react";
import {
  getAluno,
  getHistorico,
  getHistoricoExe,
  getTreinos,
  updateHistorico,
  updateHistoricoExe,
} from "../../utils/aluno.server";
import { getWeek } from "date-fns";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import {
  FaCheck,
  FaSyncAlt,
  FaDumbbell,
  FaExclamationCircle,
  FaSave,
} from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { TbHandClick } from "react-icons/tb";
import { commitSession, getSession } from "~/session.server";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type grupo = {
  grupo: string;
  id: string;
  exercicios: [];
  semana: number;
};
//Loader dos dados dos alunos e  treinos da semana atual
export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const alId = session.get("aluno")?.id;
  if (!alId) {
    session.set("aluno", {
      red: "/aluno",
    });
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const alunoa = await getAluno(session.get("aluno")?.id);
  const aluno = alunoa[0];

  const treinosGrupo = await getTreinos(getWeek(new Date()));

  // const historicoTreinos = await getHistorico(4);
  const historicoTreinos = await getHistorico(Number(session.get("aluno").id));
  const historicoExercicios = await getHistoricoExe(
    Number(session.get("aluno").id)
  );

  return json({ aluno, treinosGrupo, historicoTreinos, historicoExercicios });
};
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const _action = form.get("_action");
  let values = Object.fromEntries(form);
  // console.log(values);
  if (_action === "feito") {
    const test = await updateHistorico(values);
  }
  if (_action === "exe") {
    // const form = await request.formData();
    let values = Object.fromEntries(form);
    await updateHistoricoExe(values);
  }

  return redirect(`/aluno`);
};

export default function Treino() {
  const { aluno, treinosGrupo, historicoTreinos, historicoExercicios } =
    useLoaderData();
  const [grupo, setGrupo] = useState("");
  const [dt, setDt] = useState(Date);

  const [tipoTreinoGrupo, SetTipoTreinoGRupo] = useState(
    treinosGrupo.filter((el: any) => el.grupo.includes(""))
  );

  const [treino, setTreino] = useState();
  const [checked, setChecked] = useState([]);
  const transition = useTransition();

  // console.log(historicoTreinos.treinos);
  const hitTreino = _.mapValues(historicoTreinos?.treinos, function (o) {
    const data = format(new Date(o.data), "EEEEEE - dd/MM", {
      locale: ptBR,
    });
    return { treino: o.treino, data };
  });

  const grupotreino = _.map(_.groupBy(hitTreino, "data"), (data, idx) => {
    return { data: idx, treino: data };
  });

  const PlaneTreino = _.mapValues(historicoTreinos?.planejados, function (o) {
    return { treino: o.treinoP, dia: o.dia };
  });

  const plano = _.map(PlaneTreino, (treino: any) => {
    return treino;
  });

  const HistoricoExercicios = _.map(
    _.mapValues(historicoExercicios?.histexe, function (o) {
      return { treino: o.nome, carga: o.carga, grupo: o.grupo };
    })
  );

  const TRICEPS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("TRICEPS"))
  );
  const ABDOME = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("ABDOME"))
  );

  const BICEPS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("BICEPS"))
  );
  const COSTAS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("COSTAS"))
  );
  const GLUTEOS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("GLUTEOS"))
  );
  const MEMBROS_INFERIORES_GERAL = _.takeRight(
    HistoricoExercicios.filter((o) =>
      o.grupo?.includes("MEMBROS INFERIORES GERAL")
    )
  );

  const MEMBROS_SUPERIORES_GERAL = _.takeRight(
    HistoricoExercicios.filter((o) =>
      o.grupo?.includes("MEMBROS SUPERIORES GERAL")
    )
  );

  const MEMBROS_SUPERIORES_1 = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("MEMBROS SUPERIORES 1"))
  );

  const MEMBROS_SUPERIORES_2 = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("MEMBROS SUPERIORES 2"))
  );
  const OMBROS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("OMBROS"))
  );

  const PANTURRILHA = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("PANTURRILHA"))
  );
  const PEITORAL = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("PEITORAL"))
  );
  const POSTERIORES_DE_COXAS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("POSTERIORES DE COXAS"))
  );

  const QUADS = _.takeRight(
    HistoricoExercicios.filter((o) => o.grupo?.includes("QUADS"))
  );

  const grupotreinoPlan = _.map(
    _.groupBy(PlaneTreino, "data"),
    (data: any, idx: any, dt: any, feito: any) => {
      return { data: idx, treino: data, dt: dt, feito: feito };
    }
  );

  const ultimosPlan = _.takeRight(grupotreinoPlan, 7);

  // console.log(
  //   format(new Date("2023-06-19T18:51:00.011Z"), "dd/MM", {
  //     locale: ptBR,
  //   })
  // );

  const ultimos = _.takeRight(grupotreino, 3);

  const ultimosTreinos = _.takeRight(historicoTreinos?.treinos, 3);

  const handleGrupo = (event: any) => {
    setGrupo(event.target.value.split(",")[0]);
    setDt(event.target.value.split(",")[1]);

    // setChecked([]);
    var inputs = document.querySelectorAll("[id=done]");
    for (var i = 0; i < inputs.length; i++) {
      // @ts-ignore
      inputs[i].checked = false;
    }
  };
  //TIPO DE TREINO 2x..grupo
  // const handleTipoTreino = (event: any) => {
  //   setGrupo("");
  //   let tp = event.target.value;

  //   switch (tp) {
  //     case "2X":
  //       SetTipoTreinoGRupo(
  //         treinosGrupo.filter((el: any) => el.grupo.includes("2X"))
  //       );
  //       break;
  //     case "3X":
  //       SetTipoTreinoGRupo(
  //         treinosGrupo.filter((el: any) => el.grupo.includes("3X"))
  //       );
  //       break;
  //     case "4X":
  //       SetTipoTreinoGRupo(
  //         treinosGrupo.filter((el: any) => el.grupo.includes("4X"))
  //       );
  //       break;
  //     case "5X":
  //       SetTipoTreinoGRupo(
  //         treinosGrupo.filter((el: any) => el.grupo.includes("5X"))
  //       );
  //       break;
  //     case "6X":
  //       SetTipoTreinoGRupo(
  //         treinosGrupo.filter((el: any) => el.grupo.includes("6X"))
  //       );
  //       break;

  //     case "grupo":
  //       SetTipoTreinoGRupo(
  //         treinosGrupo.filter((el: any) => !el.grupo.includes("TREINO"))
  //       );
  //       break;
  //   }
  // };

  const handleCheck = (event: any) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      // @ts-ignore
      updatedList = [...checked, event.target.value];
    } else {
      // @ts-ignore
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);
  };

  var isChecked = (item: any) =>
    // @ts-ignore
    checked.includes(item)
      ? "bg-green-300 mb-2  font-light  p-2 rounded-lg  shadow-md"
      : "bg-stone-100 mb-2  font-light  p-2 rounded-lg  ";

  var isCheckedTitle = (item: any) =>
    // @ts-ignore
    checked.includes(item)
      ? "text-decoration-line: line-through"
      : "text font-medium text-stone-700";

  useEffect(() => {
    // console.log(treinosGrupo.filter((el) => el.grupo.includes("SEMANA")));
    setTreino(
      // @ts-ignore
      _.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  const textInput = useRef(null);

  const planoAluno = _.filter(aluno.memberships, {
    membershipStatus: "active",
  })
    .map((n) => n.name)
    .toString();
  return (
    <>
      {/* <Outlet /> */}

      <div className=" px-2 mx-auto ">
        <div className="text-center">
          <img
            src={aluno?.photoUrl ? aluno?.photoUrl : "/user.png"}
            className="rounded-full shadow-lg w-24 h-24 m-4 mx-auto"
            alt="Avatar"
          />
          <h5 className="text-xl  leading-tight mb-2">
            {aluno?.firstName} {aluno?.lastName} -{" "}
            <span className="font-mono text-gray-400"> {aluno?.idMember}</span>
          </h5>

          {/* {ultimosTreinos && (
            <>
              <h2 className="  text-blue-600 rounded-md  text-md mt-4">
                PLANEJAMENTO
              </h2>
              <div className="text-gray-500 grid  gap-2 grid-cols-3">
                {ultimos.map((u: any, index) => (
                  <div key={index} className="">
                    <div className="mt-1 mb-4  py-2 px-2 rounded-md my-4">
                      <div>{u.data}</div>
                      <div className="font-semibold text-blue-600">
                        {u.treino.map((t: any, index: any) => (
                          <div key={index}>{t.treino}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )} */}
          <div className="">
            {plano && (
              <>
                <div className=" bg-teal-100  rounded-md mb-2 items-center place-content-center gap-2 text-center flex text-stone-600 font-light ">
                  <TbHandClick className="text-stone-600 text-xl" />
                  <div>no treino para ver os exercícios</div>
                </div>
                <div>
                  <h2 className="  text-stone-500 font-medium mb-2 text-center mt-2">
                    Treinos Planejados
                  </h2>
                </div>

                <div className="text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl">
                  <Card>
                    <CardHeader>
                      <CardTitle>Segunda</CardTitle>
                      <CardDescription>
                        {plano
                          .filter((o) => o.dia?.includes("segunda"))
                          .map((s, index) => (
                            <div key={index}>
                              <button
                                key={index}
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
                            </div>
                          ))}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Terça</CardTitle>
                      <CardDescription className="">
                        {plano
                          .filter((o) => o.dia?.includes("terca"))
                          .map((s, index) => (
                            <div key={index}>
                              <button
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
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
                            <div key={index}>
                              <button
                                key={index}
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
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
                            <div key={index}>
                              <button
                                key={index}
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
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
                              <button
                                key={index}
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
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
                              <button
                                key={index}
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
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
                            <div key={index}>
                              <button
                                key={index}
                                value={s.treino}
                                onClick={handleGrupo}
                                name="treino">
                                {s.treino}
                              </button>
                            </div>
                          ))}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </>
            )}
          </div>
          <h2 className="  text-stone-500 font-medium mb-2 text-center mt-2">
            Treinos Feitos
          </h2>
          <div className="text-stone-600 text-center place-content-center gap-2  mx-auto grid grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-7 lg:container-2xl">
            {ABDOME.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Abdome</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {ABDOME.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}

            {BICEPS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Biceps</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {BICEPS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}

            {COSTAS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Costas</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {COSTAS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}

            {GLUTEOS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Glúteos</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {GLUTEOS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}

            {MEMBROS_INFERIORES_GERAL.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Inferior Geral</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {MEMBROS_INFERIORES_GERAL.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {MEMBROS_SUPERIORES_GERAL.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Superior Geral</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {MEMBROS_SUPERIORES_GERAL.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {MEMBROS_SUPERIORES_1.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Superior 1</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {MEMBROS_SUPERIORES_1.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {MEMBROS_SUPERIORES_2.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Superior 2</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {MEMBROS_SUPERIORES_2.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}

            {OMBROS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Ombros</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {OMBROS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {PANTURRILHA.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Panturrilha</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {PANTURRILHA.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}

            {PEITORAL.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Peitoral</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {PEITORAL.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {POSTERIORES_DE_COXAS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Posteriores de Coxas</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {POSTERIORES_DE_COXAS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {QUADS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Quadríceps</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {QUADS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
            {TRICEPS.length > 0 && (
              <Card className="">
                <CardHeader>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <CardTitle>Tríceps</CardTitle>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardDescription>
                          {TRICEPS.map((s, index) => (
                            <div key={index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>
                                    {s.treino}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {" "}
                                    {s.carga}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ))}
                        </CardDescription>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardHeader>
              </Card>
            )}
          </div>

          {/* {ultimosTreinos.length > 0 && (
            <>
              <h2 className="  text-stone-500 font-medium mb-1 text-center mt-2">
                ÚLTIMOS TREINOS
              </h2>
              <div className="text-gray-500 grid  gap-2 grid-cols-3">
                {ultimos.map((u: any, index) => (
                  <div key={index} className="">
                    <Card className=" h-full ">
                      <CardHeader>
                        <CardTitle>{u.data}</CardTitle>
                        {u.treino.map((t: any, index: any) => (
                          <CardDescription key={index}>
                            {t.treino}
                          </CardDescription>
                        ))}
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </>
          )} */}
        </div>

        <div className=" max-w-lg mt-2 flex mx-auto ">
          <select
            className="form-select block  justify-center w-full px-3 py-1.5 font-light text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            aria-label="Selecione o treino"
            defaultValue="Selecione o Treino"
            value={grupo}
            // @ts-ignore
            onChange={handleGrupo}>
            <option>Selecione o Treino</option>
            {tipoTreinoGrupo?.map((grupo: grupo) => (
              <option key={grupo.grupo} value={grupo.grupo}>
                {grupo.grupo}
              </option>
            ))}
          </select>
        </div>

        {grupo && (
          <Form method="post">
            <input readOnly hidden type="text" name="treino" value={grupo} />
            <input readOnly hidden type="text" name="data" value={dt} />
            <input
              hidden
              type="number"
              name="aluno"
              readOnly
              defaultValue={aluno.idMember}
            />

            {grupo !== "Selecione o Treino" &&
              planoAluno !== "MEDIDA CERTA - 2023" && (
                <div className=" block justify-center mx-auto max-w-xl ">
                  <div className="flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl">
                    {grupo}
                    <button
                      name="_action"
                      value="feito"
                      className="bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800">
                      <FaCheck />
                      {transition.state === "submitting"
                        ? "Atualizando..."
                        : "Feito"}
                    </button>
                  </div>
                </div>
              )}

            {
              // @ts-ignore
              treino?.map((e: any, index: any) => (
                <div
                  className=" grid text-stone-600  gap-2 sm:grid-cols-2 lg:grid-cols-3  "
                  key={index}>
                  {e.exercicios.map((exe: any, index: any) => (
                    <div className={isChecked(exe.nome)} key={index}>
                      <Form method="post">
                        <input
                          readOnly
                          hidden
                          type="text"
                          name="treino"
                          value={grupo}
                        />
                        <input
                          hidden
                          type="number"
                          name="aluno"
                          readOnly
                          defaultValue={aluno.idMember}
                        />
                        <input
                          hidden
                          type="text"
                          name="exenome"
                          readOnly
                          defaultValue={exe.nome}
                        />
                        <div className="flex mb-2 flex-row justify-between ">
                          <div className={isCheckedTitle(exe.nome)}>
                            {exe.nome}
                          </div>
                          <input
                            className=" w-6 h-6 accent-green-500 mr-4"
                            value={exe.nome}
                            type="checkbox"
                            onChange={handleCheck}
                            id="done"
                            name="done"
                            ref={textInput}
                          />
                        </div>
                        <div className="flex mb-2 shrink-0 items-center content-around  ">
                          <FaSyncAlt className="shrink-0 mr-3 " />
                          {exe.Repeticoes}
                        </div>
                        <div className="flex   items-center space-x-3">
                          <input
                            placeholder="Carga treinada"
                            // defaultValue={exe.carga}
                            name="carga"
                            id="carga"
                            className="flex  mb-2  items-center content-around lowercase"></input>
                          <button
                            className="flex text-lg content-center text-orange-400 bg-stone-100 "
                            type="submit"
                            name="_action"
                            value="exe">
                            <FaSave />
                          </button>
                        </div>
                        {/* <FaDumbbell className=" shrink-0 mr-3" /> */}

                        <div className="flex mb-2  shrink-0 items-center content-around lowercase ">
                          <FaExclamationCircle className="shrink-0 mr-3" />
                          {exe.obs}
                        </div>
                        {exe.video !== "" && (
                          <div className=" flex justify-end  text-l mr-4 text-white ">
                            <Link
                              className="bg-orange-300 rounded-lg px-6 p-2 "
                              to={`${exe.video}`}>
                              <FiVideo />
                            </Link>
                          </div>
                        )}
                      </Form>
                    </div>
                  ))}
                </div>
              ))
            }
          </Form>
        )}
      </div>
    </>
  );
}
