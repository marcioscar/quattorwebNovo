import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import {
  deleteTreinoPlanejado,
  getHistorico,
  updatePlanejamentoTreino,
  updatePlanejamentoTreino1,
} from "@/utils/aluno.server";
import type { ActionFunction } from "@remix-run/node";
import { redirect, type LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import _ from "lodash";
import { FaWindowClose } from "react-icons/fa";
import { treinos } from "@/utils/treinos.server";
import { Checkbox } from "@/components/ui/checkbox";

export const loader: LoaderFunction = async ({ request, params }) => {
  const aluno = params.idaluno;
  const id = params.editar;
  const historico = await getHistorico(Number(aluno));
  const gruposo = treinos;
  // console.log(treino);

  // return { historico, id, grupos };
  return { gruposo, historico, id, aluno };
};
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  let values = Object.fromEntries(form);
  const dias: string[] = [];

  if (values.segunda) {
    dias.push("segunda");
  }
  if (values.terca) {
    dias.push("terca");
  }
  if (values.quarta) {
    dias.push("quarta");
  }
  if (values.quinta) {
    dias.push("quinta");
  }
  if (values.sexta) {
    dias.push("sexta");
  }
  if (values.sabado) {
    dias.push("sabado");
  }
  if (values.domingo) {
    dias.push("domingo");
  }

  const _action = form.get("_action");

  if (_action === "salvar") {
    await updatePlanejamentoTreino(values, dias);
  }
  if (_action === "apagar") {
    await deleteTreinoPlanejado(values);
  }
  return redirect(`..`);
};
export default function Editar() {
  const { gruposo, id, historico, aluno } = useLoaderData();
  const gruposobj = _.map(gruposo, (grupo: any) => {
    return grupo;
  });
  const grupos = _.flatten(gruposobj);

  const PlaneTreino = _.mapValues(historico?.planejados, function (o) {
    return { treino: o.treinoP, dia: o.dia, id: o.id };
  });

  const plano = _.map(PlaneTreino, (treino: any) => {
    return treino;
  });

  const treinoP = plano.filter((t) => t.id?.includes(id));

  console.log(treinoP.filter((o) => o.dia?.includes("terca")));
  const navigate = useNavigate();
  function closeHandler() {
    navigate(-1);
  }

  return (
    <Modal onClose={closeHandler}>
      <Form method="post" className="font-semibold  ">
        <input type="text" id="id" name="id" hidden readOnly value={id} />
        <input
          type="text"
          id="aluno"
          name="aluno"
          readOnly
          hidden
          value={aluno}
        />
        <div className=" text-center mb-4">Ediçao do treino</div>
        <div className="text-center mb-5">{treinoP.map((t) => t.treino)}</div>
        {/* <div className="flex items-center mb-4 "> */}
        <div className="grid grid-cols-3 md:flex items-center ">
          <div className="md:flex">
            <Checkbox
              id="segunda"
              name="segunda"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("segunda")).length > 0
              }
            />
            <label
              htmlFor="segunda"
              className="text-sm  mr-7  text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Segunda
            </label>
          </div>
          <div className="md:flex">
            <Checkbox
              id="terca"
              name="terca"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("terca")).length > 0
              }
            />
            <label
              htmlFor="terca"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Terça
            </label>
          </div>
          <div className="md:flex">
            <Checkbox
              id="quarta"
              name="quarta"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("quarta")).length > 0
              }
            />
            <label
              htmlFor="quarta"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Quarta
            </label>
          </div>
          <div className="md:flex">
            <Checkbox
              id="quinta"
              name="quinta"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("quinta")).length > 0
              }
            />
            <label
              htmlFor="quinta"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Quinta
            </label>
          </div>
          <div className="md:flex">
            <Checkbox
              id="sexta"
              name="sexta"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("sexta")).length > 0
              }
            />
            <label
              htmlFor="sexta"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sexta
            </label>
          </div>
          <div className="md:flex">
            <Checkbox
              id="sabado"
              name="sabado"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("sabado")).length > 0
              }
            />
            <label
              htmlFor="sabado"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sábado
            </label>
          </div>
          <div className="md:flex">
            <Checkbox
              id="domingo"
              name="domingo"
              className="mr-1"
              defaultChecked={
                treinoP.filter((o) => o.dia?.includes("domingo")).length > 0
              }
            />
            <label
              htmlFor="domingo"
              className="text-sm mr-7 text-stone-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Domingo
            </label>
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          <Button
            variant="secondary"
            className="bg-stone-300  w-full text-black "
            name="_action"
            value="salvar">
            Salvar
          </Button>
          <Button
            variant="secondary"
            className="bg-red-600 text-white  w-full "
            name="_action"
            value="apagar">
            Apagar
          </Button>
        </div>
      </Form>
      <div className=" flex place-content-end">
        <Link to=".." className="m-4 text-xl ">
          <FaWindowClose className=" font-semibold text-3xl text-stone-600 " />
        </Link>
      </div>
    </Modal>
  );
}
