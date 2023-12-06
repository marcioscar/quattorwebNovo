import { FaMapMarkedAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import Aulas from "~/components/Aulas";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAulas } from "~/utils/aulas.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const TodasAulas = await getAulas();
  return json({ TodasAulas });
};

export default function Index() {
  const { TodasAulas } = useLoaderData();

  return (
    <>
      <div className="h-80 xl:h-5/6 w-full bg-gradient-to-tl from-black to-orange-500 relative">
        <img
          alt="content"
          className="w-full h-full object-cover absolute mix-blend-overlay "
          src="/fundo_novo.jpg"
        />
        <div className="pt-10 xl:pt-20 xl:pl-10 ">
          <h2 className="text-4xl xl:text-6xl font-extrabold shadow-xl text-white md:text-3xl">
            Quattor Academia
          </h2>
          <div className="text-md xl:text-2xl font-bold text-white ">
            Jornada de Resultados Reais
          </div>
        </div>

        <div className=" pl-32 pt-8 flex justify-end items-end">
          <img
            alt="logo"
            src="/15anos.svg"
            className="mt-10 w-60 xl:w-96 xl:mt-0  "
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]">
        {/* <div className="bg-gradient-to-r from-[#8e9eab] to-[#eef2f3]"> */}
        <div className="text-gray-600 body-font bg-no-repeat min-h-screen bg-contain bg-center bg-[url('/bola50.svg')]">
          <div className="container mx-auto content-center  py-6 px-2 md:px-0 md:grid md:gap-x-6  md:gap-y-4 md:grid-cols-3">
            <div className="bg-white/75  py-6 mb-2 flex flex-col items-center rounded-lg  drop-shadow-2xl  min-h-96 max-h-96">
              <div className="flex  items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                  <FaMapMarkedAlt />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Onde Estamos
                </h2>
              </div>

              <div className="text-center ">
                <p className="font-semibold">Rua 5 Sul - Águas Claras - DF</p>
                <div className=" ">
                  <a
                    href="https://wa.me/5561993190568"
                    className="mt-2  font-semibold inline-flex items-center ">
                    <FaWhatsapp className="text-green-600 text-2xl mr-2 " />
                    (61) 99319-0568
                  </a>
                  <a href="https://wa.me/5561993190568">
                    <button className="bg-green-400 tracking-tighter ml-5 px-2 py-1  text-white inline-flex items-center space-x-2 rounded">
                      <FaWhatsapp />
                      <span>Aula experimental</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex mt-10  items-center mb-3">
                <div className="w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <FaClock />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Horário de Funcionamento
                </h2>
              </div>
              <div className="flex-grow text-center">
                <p className="leading-relaxed ">
                  <span className=" text-gray-900 ">Segunda a Sexta:</span>{" "}
                  6:00h às 23:00h
                </p>
                <p className="leading-relaxed  ">
                  <span className=" text-gray-900 ">Sábados e Feriados:</span>{" "}
                  8:00h às 12:00h
                </p>
                <p className="leading-relaxed  ">
                  <span className=" text-gray-900 ">Domingos:</span> 8:00h às
                  12:00h
                </p>
              </div>
            </div>
            <div className="bg-white/75 overflow-auto rounded-lg mb-2  max-h-96  min-h-96 col-span-2">
              <Aulas aulas={TodasAulas} />
            </div>
            {/* <div className="mb-2  ">
              <img src="/feriado.jpg" alt="feriado" className="rounded-lg" />
            </div> */}
            <div className="mb-2">
              <video controls poster="/como.jpg">
                <source src="/treino.mp4" />
              </video>
            </div>
            {/* <div className="mb-2">
              <img
                src="/recesso_ballet infantil.jpg"
                alt="recesso ballet infantil"
              />
            </div>
            <div className="mb-2">
              <img src="/recesso_ballet.jpg" alt="recesso ballet" />
            </div>
            <div className="mb-2">
              <img src="/recesso_fitdance.jpg" alt="recesso fit" />
            </div>
            <div className="mb-2">
              <img src="/recesso_judo.jpg" alt="recesso judo" />
            </div>
            <div className="mb-2">
              <img src="/recesso_natacao.jpg" alt="recesso natacao" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
