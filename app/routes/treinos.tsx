import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getTreinos } from "~/utils/treinos.server";
import { getWeek } from "date-fns";
import { useFetcher, useLoaderData, Outlet, Link } from "@remix-run/react";
import { FaListAlt, FaPrint } from "react-icons/fa";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const par = url.searchParams.get("semana_query");
  const parametro = par ? parseInt(par) : getWeek(new Date());
  // const treinos = await getTreinos(getWeek(new Date()));
  const treinos = await getTreinos(parametro);

  return json({ treinos });
};

export default function Treino() {
  const semana = useFetcher();
  const { treinos } = useLoaderData();
  const treinoSemana = semana.data?.treinos ? semana.data.treinos : treinos;
  return (
    <div className="w-full bg-stone-100 font-Roboto ">
      <div className="flex items-center flex-col space-x-4">
        <h2 className="text-2xl font-extrabold text-slate-700">
          Lista de Treinos
        </h2>

        <semana.Form method="get" action=".">
          <select
            name="semana_query"
            onChange={(event) => semana.submit(event.target.form)}
            className="rounded-md border-2 form-control block">
            <option value="01">01 - (01/01 a 07/01)</option>
            <option value="02">02 - (08/01 a 14/01)</option>
            <option value="03">03 - (15/01 a 21/01)</option>
            <option value="04">04 - (22/01 a 28/01)</option>
            <option value="05">05 - (29/01 a 04/02)</option>
            <option value="06">06 - (05/02 a 11/02)</option>
            <option value="07">07 - (12/02 a 18/02)</option>
            <option value="08">08 - (19/02 a 25/02)</option>
            <option value="09">09 - (26/02 a 04/03)</option>
            <option value="10">10 - (05/02 a 11/03)</option>
            <option value="11">11 - (12/03 a 18/03)</option>
            <option value="12">12 - (19/03 a 25/03)</option>
            <option value="13">13 - (26/03 a 01/04)</option>
            <option value="14">14 - (02/04 a 08/04)</option>
            <option value="15">15 - (09/04 a 15/04)</option>
            <option value="16">16 - (16/04 a 22/04)</option>
            <option value="17">17 - (23/04 a 29/04)</option>
            <option value="18">18 - (30/04 a 06/05)</option>
            <option value="19">19 - (30/04 a 06/05)</option>
            <option value="20">20 - (07/05 a 13/05)</option>
            <option value="21">21 - (14/05 a 20/05)</option>
            <option value="22">22 - (21/05 a 27/05)</option>
            <option value="23">23 - (28/05 a 03/06)</option>
            <option value="24">24 - (04/06 a 10/06)</option>
            <option value="25">25 - (11/06 a 17/06)</option>
            <option value="26">26 - (18/06 a 24/06)</option>
            <option value="27">27 - (25/06 a 01/07)</option>
            <option value="28">28 - (02/07 a 08/07)</option>
            <option value="29">29 - (09/07 a 15/07)</option>
            <option value="30">30 - (16/07 a 22/07)</option>
            <option value="31">31 - (23/07 a 29/07)</option>
            <option value="32">32 - (06/07 a 12/07)</option>
            <option value="33">33 - (13/08 a 19/08)</option>
            <option value="34">34 - (20/08 a 26/08)</option>
            <option value="35">35 - (27/08 a 02/09)</option>
            <option value="36">36 - (03/09 a 09/09)</option>
            <option value="37">37 - (10/09 a 16/09)</option>
            <option value="38">38 - (17/09 a 23/08)</option>
            <option value="39">39 - (24/09 a 30/08)</option>
            <option value="40">40 - (01/10 a 07/10)</option>
            <option value="41">41 - (08/10 a 14/10)</option>
            <option value="42">42 - (15/10 a 21/10)</option>
            <option value="43">43 - (22/10 a 28/10)</option>
            <option value="44">44 - (29/10 a 04/11)</option>
            <option value="45">45 - (05/11 a 11/11)</option>
            <option value="46">46 - (12/11 a 18/11)</option>
            <option value="47">47 - (19/11 a 25/11)</option>
            <option value="48">48 - (26/11 a 02/12)</option>
            <option value="49">49 - (03/12 a 09/12)</option>
            <option value="50">50 - (10/12 a 16/12)</option>
            <option value="51">51 - (17/12 a 23/12)</option>
            <option value="52">52 - (24/12 a 30/12)</option>
          </select>
        </semana.Form>
      </div>
      <div className="container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3">
        <div className="overflow-x-auto relative">
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs  text-gray-700 uppercase bg-stone-100 dark:bg-gray-700 dark:text-gray-400">
              <tr className="rounded-lg">
                <th scope="col" className=" ">
                  Grupo
                </th>
                <th scope="col" className="text-center ">
                  Semana
                </th>

                {/* <th className="text-right px-2 text-green-600 text-lg ">
                  <FaTasks />
                </th> */}
              </tr>
            </thead>
            <tbody>
              {treinoSemana.map((treino: any) => (
                <tr key={treino.id} className=" dark:bg-gray-800">
                  <th className="py-1 flex gap-x-2 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {treino.grupo}
                  </th>
                  <td className=" text-center">{treino.semana}</td>
                  <td className="  ">
                    <Link to={`${treino.id}`} className="text-sky-600 text-lg ">
                      {/* Exercícios */}
                      <FaListAlt />
                    </Link>
                  </td>
                  <td className="  ">
                    <Link
                      to={`/print/${treino.id}`}
                      className="text-orange-400 text-lg ">
                      <FaPrint />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-2">
          <h2 className=" font-semibold text-center text-slate-700">
            Lista de Exercícios
          </h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
