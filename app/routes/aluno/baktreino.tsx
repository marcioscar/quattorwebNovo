import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useTransition,
} from "@remix-run/react";

import {
  getAluno,
  getHistorico,
  getTreinos,
  updateHistorico,
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
} from "react-icons/fa";
import { FiVideo } from "react-icons/fi";

type grupo = {
  grupo: string;
  id: string;
  exercicios: [];
  semana: number;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const aluno = await getAluno(Number(params.treino));
  const treinosGrupo = await getTreinos(getWeek(new Date()));

  const historicoTreinos = await getHistorico(Number(params.treino));
  return json({ aluno, treinosGrupo, historicoTreinos });
};
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let values = Object.fromEntries(form);
  await updateHistorico(values);

  return redirect(`/aluno/${values.aluno}`);
};

export default function Treino() {
  const { aluno, treinosGrupo, historicoTreinos } = useLoaderData();
  const [grupo, setGrupo] = useState();
  const [tipoTreinoGrupo, SetTipoTreinoGRupo] = useState(
    treinosGrupo.filter((el: any) => el.grupo.includes("2X"))
  );
  const [treino, setTreino] = useState();
  const [checked, setChecked] = useState([]);
  const transition = useTransition();
  const ultimosTreinos = _.takeRight(historicoTreinos?.treinos, 6);

  const handleGrupo = (event: any) => {
    setGrupo(event.target.value);
    // setChecked([]);
    var inputs = document.querySelectorAll("[id=done]");
    for (var i = 0; i < inputs.length; i++) {
      // @ts-ignore
      inputs[i].checked = false;
    }
  };

  const handleTipoTreino = (event: any) => {
    let tp = event.target.value;

    switch (tp) {
      case "2X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el: any) => el.grupo.includes("2X"))
        );
        break;
      case "3X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el: any) => el.grupo.includes("3X"))
        );
        break;
      case "4X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el: any) => el.grupo.includes("4X"))
        );
        break;
      case "5X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el: any) => el.grupo.includes("5X"))
        );
        break;
      case "6X":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el: any) => el.grupo.includes("6X"))
        );
        break;

      case "grupo":
        SetTipoTreinoGRupo(
          treinosGrupo.filter((el: any) => !el.grupo.includes("TREINO"))
        );
        break;
    }
    // event.target.value === "2X"
    //   ? SetTipoTreinoGRupo(
    //       treinosGrupo.filter((el: any) => el.grupo.includes("2X"))
    //     )
    //   : SetTipoTreinoGRupo(treinosGrupo);
  };

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
      : "text font-medium text-green-600";

  useEffect(() => {
    setTreino(
      // @ts-ignore
      _.filter(tipoTreinoGrupo, ["grupo", grupo])
    );
  }, [grupo, tipoTreinoGrupo]);
  const textInput = useRef(null);

  return (
    <>
      <Outlet />

      <div className=" px-2 mx-auto ">
        <div className="text-center">
          <img
            src={aluno.photo}
            className="rounded-full shadow-lg w-24 h-24 m-4 mx-auto"
            alt="Avatar"
          />
          <h5 className="text-xl  leading-tight mb-2">
            {aluno.firstName} {aluno.lastName} -{" "}
            <span className="font-mono text-gray-400"> {aluno.idMember}</span>
          </h5>
          {ultimosTreinos && (
            <>
              <h2 className="  text-blue-600 rounded-md  text-md mt-4">
                ÚLTIMOS TREINOS
              </h2>
              <div className="text-gray-500 grid  gap-2 grid-cols-3">
                {ultimosTreinos.map((u: any, index) => (
                  <div key={index} className="">
                    <div className="mt-1 mb-4  py-2 px-2 rounded-md my-4">
                      <div className="font-semibold text-blue-600">
                        {u.treino}
                      </div>
                      <div>
                        {format(new Date(u.data), "EEEEEE - dd/MM", {
                          locale: ptBR,
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-full max-w-lg mb-2 px-6 py-3 mx-auto border bg-white rounded-lg  ">
          <h1 className="font-semibold mb-3">Treinos por Semana</h1>
          <div className="flex justify-between text-sm text-center item-center">
            <div>
              <input
                name="semana"
                type="radio"
                id="2"
                value="2X"
                onChange={handleTipoTreino}
                className="hidden peer"
              />
              <label
                htmlFor="2"
                className="inline-block cursor-pointer w-12 h-10 p-3  font-medium  text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white">
                2
              </label>
            </div>
            <div>
              <input
                name="semana"
                type="radio"
                id="3"
                value="3X"
                onChange={handleTipoTreino}
                className="hidden peer"
              />
              <label
                htmlFor="3"
                className="inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white">
                3
              </label>
            </div>
            <div>
              <input
                name="semana"
                type="radio"
                id="4"
                value="4X"
                onChange={handleTipoTreino}
                className="hidden peer"
              />
              <label
                htmlFor="4"
                className="inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white">
                4
              </label>
            </div>
            <div>
              <input
                name="semana"
                type="radio"
                id="5"
                value="5X"
                onChange={handleTipoTreino}
                className="hidden peer"
              />
              <label
                htmlFor="5"
                className="inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white">
                5
              </label>
            </div>
            <div>
              <input
                name="semana"
                type="radio"
                id="6"
                value="6X"
                onChange={handleTipoTreino}
                className="hidden peer"
              />
              <label
                htmlFor="6"
                className="inline-block cursor-pointer w-12 h-10 p-3 font-medium text-white rounded-full bg-stone-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white">
                6
              </label>
            </div>
            <div>
              <input
                name="semana"
                type="radio"
                id="grupo"
                value="grupo"
                className="hidden peer"
                onChange={handleTipoTreino}
              />
              <label
                htmlFor="grupo"
                className="inline-block cursor-pointer w-16 h-10 p-3 font-medium text-white rounded-full bg-gray-400 peer-hover:bg-gray-300 peer-hover:text-white peer-checked:bg-orange-600 peer-checked:text-white">
                Grupo
              </label>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <div className="mb-2   mr-4 inline-block min-h-2 pl-6">
            <input
              onChange={handleTipoTreino}
              className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 rounded-full border-2 border-solid border-neutral-300 dark:border-neutral-600 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary dark:checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary dark:checked:after:border-primary dark:checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary dark:checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              type="radio"
              name="tipo"
              value="grupo"
              readOnly
              defaultChecked={tipoTreino === "grupo"}
            />
            <label
              className="mt-px inline-block  pl-[0.15rem] hover:cursor-pointer"
              htmlFor="tipoTreino">
              2X SEMANA
            </label>
          </div>
          <div className="mb-2 mr-4 inline-block min-h-2 pl-6">
            <input
              onChange={handleTipoTreino}
              className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5  rounded-full border-2 border-solid border-neutral-300 dark:border-neutral-600 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary dark:checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary dark:checked:after:border-primary dark:checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary dark:checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              type="radio"
              name="tipo"
              value="2X"
              readOnly
              defaultChecked={tipoTreino === "2X"}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="tipoTreino">
              Grupo Muscular
            </label>
          </div>
        </div> */}
        <div className=" max-w-lg flex mx-auto ">
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
            <input
              hidden
              type="number"
              name="aluno"
              defaultValue={aluno.idMember}
            />

            {grupo !== "Selecione o Treino" && (
              <div className=" block justify-center mx-auto max-w-xl ">
                <div className="flex flex-row  justify-evenly  font-bold text-orange-500 items-center m-2 text-xl">
                  {grupo}
                  <button className="bg-blue-500   inline-flex gap-3 items-center px-3 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md  hover:shadow-lg hover:bg-green-800">
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
                  className=" grid  gap-2 sm:grid-cols-2 lg:grid-cols-3  "
                  key={index}>
                  {e.exercicios.map((exe: any, index: any) => (
                    <div className={isChecked(exe.nome)} key={index}>
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
                      <div className="flex  mb-2  items-center content-around lowercase">
                        <FaDumbbell className=" shrink-0 mr-3" />
                        {exe.carga}
                      </div>

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
