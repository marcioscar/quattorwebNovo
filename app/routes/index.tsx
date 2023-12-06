import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAulas } from "~/utils/aulas.server";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Aulas from "~/components/Aulas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";

export const loader: LoaderFunction = async ({ request }) => {
  const TodasAulas = await getAulas();
  return json({ TodasAulas });
};

export default function Index() {
  const { TodasAulas } = useLoaderData();

  return (
    <div className="grid md:container  w-[97%]  mx-auto mt-1  grid-cols-12 gap-3">
      <div className="bg-stone-200 hidden md:rounded-lg md:block shadow-sm md:h-[523px] md:row-span-2 md:col-span-3">
        <div className="flex flex-col text-center  ">
          <h1 className="font-bold text-3xl text-stone-800 mt-[104px]">
            Funcionamento
          </h1>
          <div className="">
            <div className="  font-semibold text-2xl mt-[59px] text-stone-800">
              Seg à sex
            </div>
            <div className=" text-2xl  text-stone-600">6h às 23h</div>
            <div>
              <div className=" font-semibold text-2xl mt-[59px] text-stone-800">
                sab / dom / Feriados
              </div>
              <div className=" text-2xl  text-stone-600">8h às 12h</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 rounded-lg md:h-[523px] md:row-span-2 md:col-span-5">
        <img
          src="/assets/capa.jpg"
          alt="background"
          className=" object-cover w-full  h-[212px] md:h-[523px] md:w-full rounded-lg "
        />

        <img
          src="/assets/capasombra.svg"
          alt="logo"
          className="w-1/2 -mt-[136px]  ml-48 md:ml-48  md:w-1/2 md:-mt-[210px]  "
        />
        {/* <p className=" text-white font-medium ml-44 mt-5 md:ml-48 md:text-xl">
          Rua 5 Sul - Águas Claras
        </p> */}
      </div>

      <div className=" hidden md:block md:bg-stone-200 md:rounded-lg md:shadow-sm md:h-[340px] md:row-span-1 md:col-span-4">
        <div className="flex flex-col text-center  ">
          <h1 className=" font-medium text-4xl text-stone-800 mt-14">
            Contatos
          </h1>
          <div>
            <a
              href="https://wa.me/5561993190568"
              className="mt-8 text-3xl inline-flex items-center  text-stone-800  ">
              <FaWhatsapp className="text-orange-400 text-5xl mr-2  " />
              (61) 99319-0568
            </a>
          </div>
          <div className=" font-bold text-slate-800 text-lg">
            RUA 5 SUL - ÁGUAS CLARAS
          </div>
          <div className="inline-flex items-center place-content-center space-x-8 mt-8 ">
            <a href="https://www.instagram.com/quattor_academia/#">
              <FaInstagram className=" text-5xl text-stone-400" />
            </a>
            <a href="mailto:recepcao@quattoracademia.com.br">
              <MdOutlineAlternateEmail className=" text-5xl text-stone-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-stone-200 rounded-lg mt-2 mb-2 col-span-6  ">
        <div className="flex flex-col text-center  mb-4 ">
          <h1 className="font-bold text-xl text-stone-800 mt-4">
            Funcionamento
          </h1>
          <div className="">
            <div className="  font-semibold text-lg mt-4 text-stone-800">
              Seg à sex
            </div>
            <div className=" text-lg  text-stone-600">6h às 23h</div>
            <div>
              <div className=" font-semibold text-lg mt-4 text-stone-800">
                sab / dom / Feriados
              </div>
              <div className=" text-lg  text-stone-600">8h às 12h</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-stone-200 rounded-lg mt-2 mb-2 shadow-sm  col-span-6">
        <div className="flex flex-col text-center  ">
          <h1 className=" font-bold text-xl text-stone-800  mt-4">Contatos</h1>
          <div>
            <a
              href="https://wa.me/5561993190568"
              className="mt-2 text-lg inline-flex items-center  text-stone-800  ">
              <FaWhatsapp className="text-orange-400 text-xl mr-1  " />
              (61) 99319-0568
            </a>
            <div className=" font-bold text-sm text-slate-800 ">
              RUA 5 SUL - ÁGUAS CLARAS
            </div>
          </div>
          <div>
            <a
              href="https://wa.me/5561993190568"
              className="mt-2 inline-flex items-center  text-stone-800  ">
              <Button className=" bg-orange-400 text-xl w-36">Agendar</Button>
            </a>
          </div>
          <div className="inline-flex items-center place-content-center space-x-8 mt-2 ">
            <a href="https://www.instagram.com/quattor_academia/#">
              <FaInstagram className=" text-3xl text-stone-400" />
            </a>
            <a href="mailto:recepcao@quattoracademia.com.br">
              <MdOutlineAlternateEmail className=" text-3xl text-stone-400" />
            </a>
          </div>
        </div>
      </div>

      <div className=" hidden md:block md:bg-stone-200 md:rounded-lg md:shadow-sm md:h-[174px] md:col-span-4">
        <div className="flex flex-col text-center  ">
          <h1 className=" font-medium text-3xl text-stone-800 mt-8">
            Agende uma aula
          </h1>
          <div>
            <a
              href="https://wa.me/5561993190568"
              className="mt-8  inline-flex items-center  text-stone-800  ">
              <Button className=" bg-orange-400 text-2xl  w-60">Agendar</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="  col-span-12 md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center space-x-2">
          <div className="ml-4">
            <p className="text-base font-medium text-orange-500 dark:text-white">
              Musculação
            </p>
            <p className="mt-2 text-sm text-stone-800">
              Método exclusivo Treinos semanais
            </p>
          </div>
          <div className="">
            <img
              className="h-[110px] min-w-20   opacity-60 object-cover rounded-lg"
              src="/assets/musculacao.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className="hidden md:bg-stone-50 md:border md:fill-stone-300 md:h-32 md:place-content-end md:items-end md:flex  h-24 md:col-span-3  md:rounded-lg">
        <img
          src="/assets/musculacao.jpg"
          alt="background"
          className="opacity-50 rotate-2 object-cover h-3/4 w-2/6 rounded-md "
        />
      </div> */}
      <div className=" col-span-12  md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center space-x-2">
          <div className="ml-4">
            <p className="text-base font-medium text-orange-500 dark:text-white">
              Natação Infantil
            </p>
            <p className="mt-2 text-sm text-stone-800">
              Piscina salinizada Piscina aquecida
            </p>
          </div>
          <div className="">
            <img
              className="h-[110px] w-40   opacity-60 object-cover rounded-lg"
              src="/assets/natacao.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-span-6 md:row-span-2 md:bg-stone-200 md:rounded-lg">
        <div className="overflow-auto rounded-lg mb-2 max-h-[280px] ">
          <Aulas aulas={TodasAulas} />
        </div>
      </div>
      <div className=" col-span-12  md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center space-x-2">
          <div className="ml-4">
            <p className="text-base font-medium text-orange-500 dark:text-white">
              Quattor Prime
            </p>
            <p className="mt-2 w-[190px] md:w-[138px] text-sm text-stone-800">
              Estúdio Personal
              <p>3 alunos por horário</p>
            </p>
          </div>
          <div className="">
            <img
              className="h-[110px]  w-40    opacity-60 object-cover rounded-lg"
              src="/assets/prime.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" col-span-12 md:flex bg-stone-50 border md:col-span-3 w-full items-center  justify-around  rounded-lg  p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center space-x-2">
          <div className="ml-4">
            <p className="text-base font-medium text-orange-500 dark:text-white">
              Ballet{" "}
            </p>
            <p className="mt-2 w-[190px] md:w-[138px] text-sm text-stone-800">
              Infantil
              <p> Adulto</p>
            </p>
          </div>
          <div className="">
            <img
              className="h-[110px] w-40 opacity-60 object-cover rounded-lg"
              src="/assets/ballet.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="] md:hidden col-span-12  bg-stone-200 rounded-lg">
        <div className="overflow-auto rounded-lg mb-2 max-h-[280px] ">
          <Aulas aulas={TodasAulas} />
        </div>
      </div>
    </div>
  );
}
