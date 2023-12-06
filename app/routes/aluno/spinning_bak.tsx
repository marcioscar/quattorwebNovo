import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useCatch, useTransition } from "@remix-run/react";

import { getAluno } from "../../utils/aluno.server";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const matricula = form.get("matricula");

  // @ts-ignore
  const aluno = await getAluno(matricula);

  if (!aluno.idMember) {
    throw json(
      { message: "Aluno não Encontrado" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  }
  if (aluno.membershipStatus === "Inactive") {
    throw json(
      { message: "Aluno Inativo" },
      { status: 401, statusText: Math.floor(Math.random() * 15).toString() }
    );
  }

  return redirect(`/aluno/${aluno.idMember}`);
};

export default function Index() {
  const transition = useTransition();

  return (
    <div className="h-screen w-full bg-stone-100 font-Roboto ">
      <div className="bg-gradient-to-r from-[rgb(253,0,0)] to-[#ffa927]">
        <div className="text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-center bg-[url('/bola50.svg')]">
          <div className="h-full mt-24 items-center flex flex-col gap-y-4">
            <Form method="post" className="rounded-2xl bg-black p-6 w-96">
              <label htmlFor="matricula" className="text-white font-semibold ">
                Número de Matricula
              </label>
              <input
                className="w-full p-2 rounded-xl my-2"
                type="number"
                name="matricula"
                required
              />
              <div className="w-full text-center">
                <button
                  disabled={
                    transition.state === "submitting" ||
                    transition.state === "loading"
                  }
                  type="submit"
                  name="Entrar"
                  className={
                    "" + transition.state === "loading"
                      ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold"
                      : "rounded-xl mt-2  bg-orange-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1"
                  }>
                  {transition.state === "submitting"
                    ? "Localizando..."
                    : transition.state === "loading"
                    ? "Carregando Treino"
                    : "Entrar"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const transition = useTransition();
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message;
  const random = caughtResponse.statusText;

  useEffect(() => {
    const notify = () => toast.error(<div>{message}</div>);
    notify();
  }, [random, message]);

  return (
    <>
      <div className="h-screen w-full bg-stone-100 font-Roboto ">
        <Toaster
          toastOptions={{
            className: "",
            style: {
              padding: "12px",
              color: "#ffffff",
              background: "#f78e34",
            },
          }}
        />
        <Nav />

        <div className="h-full mt-24 items-center flex flex-col gap-y-4">
          <Form method="post" className="rounded-2xl bg-stone-200 p-6 w-96">
            <label
              htmlFor="matricula"
              className="text-stone-600 font-semibold ">
              Número de Matricula
            </label>
            <input
              className="w-full p-2 rounded-xl my-2"
              type="number"
              name="matricula"
              required
            />
            {/* <div className="text-red-500 text-center">{message}</div> */}
            {/* <div className="flex items-center rounded-lg  bg-amber-200 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
              <div className="text-red-500  rounded-full bg-white mr-3">
                <svg
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 16 16"
                  className="bi bi-x"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                  />
                </svg>
              </div>

              <div className="text-amber-700 max-w-xs ">{message}</div>
            </div> */}
            <div className="w-full text-center">
              <button
                disabled={
                  transition.state === "submitting" ||
                  transition.state === "loading"
                }
                type="submit"
                name="Entrar"
                className={
                  "" + transition.state === "loading"
                    ? "rounded-xl mt-2  bg-blue-600 px-3 py-2 text-white font-semibold"
                    : "rounded-xl mt-2  bg-green-600 px-3 py-2 text-white font-semibold hover:bg-orange-400 hover:-translate-y-1"
                }>
                {transition.state === "submitting"
                  ? "Localizando..."
                  : transition.state === "loading"
                  ? "Carregando Treino"
                  : "Entrar"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
