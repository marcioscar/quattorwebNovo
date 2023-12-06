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
    <div className="h-screen w-full bg-gradient-to-b from-[#e6b980] to-[#eacda3] font-Roboto ">
      <div className="h-full mt-24 items-center flex flex-col gap-y-4">
        <Form
          method="post"
          className="rounded-2xl bg-white bg-opacity-30 p-6 md:w-1/2 w-10/12">
          <label htmlFor="matricula" className="text-stone-800 font-semibold ">
            Número de Matricula
          </label>
          <input
            className="w-full p-2 rounded-xl my-2 placeholder-slate-300 text-slate-600"
            type="number"
            name="matricula"
            placeholder="Pegue seu número na recepção..."
            required
            autoFocus
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
        <Navbar />

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
