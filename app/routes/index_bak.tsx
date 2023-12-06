import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAulas } from "~/utils/aulas.server";
import { FaWhatsapp } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import Aulas from "~/components/Aulas";

export const loader: LoaderFunction = async ({ request }) => {
  const TodasAulas = await getAulas();
  return json({ TodasAulas });
};

export default function Index() {
  const { TodasAulas } = useLoaderData();

  return (
    <div className="md:pt-4 h-screen md:container md:mx-auto ">
      <div className=" bg-white py-4 px-6 mx-auto rounded-lg ">
        <div className=" h-[140px] w-[100px] md:w-[400px] md:h-[200px]">
          {/* <img
            src="/assets/capa.jpg"
            alt="background"
            className="hidden   w-full h-full "
          /> */}
        </div>
        <div className="flex flex-col items-center md:-mt-44 -mt-32">
          <img src="/back1.svg" alt="logo" className="w-48 md:w-72 " />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">Rua 5 sul - Águas Claras</p>
          </div>
          <p className="text-gray-700">
            <a
              href="https://wa.me/5561993190568"
              className="mt-2 text-xl font-semibold inline-flex items-center ">
              <FaWhatsapp className="text-green-600 text-3xl mr-2  " />
              (61) 99319-0568
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Seg à sex 6h - 23h - sab / dom / Feriados - 8h - 12h
          </p>

          {/* <a href="https://wa.me/5561993190568">
            <img
              alt="gym"
              src="https://assets-cdn.gympass.com/images/mep-strapi-blog/thumbnail_5_PT_3c78db3fc7.png”"
            />
          </a> */}
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2 mb-4">
          <div className="flex items-center space-x-4 mt-2">
            <a
              href="https://wa.me/5561993190568"
              className="flex items-center bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <GiGymBag />
              <span>Agendar </span>
            </a>
            <a
              href="https://wa.me/5561993190568"
              className="flex items-center bg-blue-400 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"></path>
              </svg>
              <span>Mensagem</span>
            </a>
          </div>
        </div>
      </div>

      {/* <section className="mb-12 text-gray-800 lg:text-left">
        <div className="grid  lg:grid-cols-3 gap-6 xl:gap-12 items-center">
          <div className="mb-2 lg:mb-0 ">
          
            <div className="  ">
              <img
                src="logo_alto.svg"
                className="w-48 mx-auto md:mx-0 md:w-[240px] "
                alt="logo"
              />
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div className="flex  items-baseline mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                <FaMapMarkedAlt />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Onde Estamos
              </h2>
            </div>
            <div className="px-10 text-center  md:text-start  ">
              <p className="font-semibold text-lg  md:text-base">
                Rua 5 Sul - Águas Claras - DF
              </p>
              <div className="">
                <a
                  href="https://wa.me/5561993190568"
                  className="mt-2 text-xl font-semibold inline-flex items-center ">
                  <FaWhatsapp className="text-green-600 text-3xl  " />
                  (61) 99319-0568
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-baseline mb-3">
              <div className="w-8 h-8  mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <FaClock />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Horário de Funcionamento
              </h2>
            </div>
            <div className="flex-grow px-10  font-medium text-center md:text-start ">
              <p className="leading-relaxed ">
                <span className=" text-gray-900 ">Segunda a Sexta:</span> 6h às
                23h
              </p>
              <p className="leading-relaxed ">
                <span className=" text-gray-900 ">Sábados e Feriados:</span> 8h
                às 12h
              </p>
              <p className="leading-relaxed  ">
                <span className=" text-gray-900 ">Domingos:</span> 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <div className="grid grid-cols-1 md:grid-cols-4  gap-x-2 lg:gap-x-3">
        <div className="mx-2 mt-5  md:block">
          <Link to="ballet">
            <img className="rounded-lg bg-cover " src="/belaweb.jpg" alt="" />
          </Link>
          <div className="flex flex-row justify-between items-start mt-1">
            <Link
              to="ballet"
              className="text-lg mx-auto bg-yellow-300 block p-2 w-full text-center rounded-md font-bold text-blue-800 ">
              Programa do Espetáculo
            </Link>
            {/* <p className="text-gray-500 mb-4">Comprar Ingressos </p> */}
            {/* <p className="text-sm text-gray-800">Infantil</p> */}
          </div>
        </div>
        <div className="mx-2 mt-5">
          <img className="rounded-lg bg-cover" src="/amigo.jpg" alt="" />
          <div className="flex flex-row justify-between items-start mt-4">
            {/* <div>
              <p className="text-lg font-bold text-red-400 ">Briquedoteca</p>
              <p className="text-gray-500 mb-4">Com Monitor </p>
              
            </div> */}
          </div>
        </div>

        {/* <div className="mx-2 mt-5 hidden md:block">
          <img className="rounded-lg bg-cover " src="/foto_judo.jpg" alt="" />
          <div className="flex flex-row justify-between items-start mt-4">
            <div>
              <p className="text-lg font-bold text-blue-400 ">Judo</p>
              <p className="text-gray-500 mb-4">Infantil </p>
              
            </div>
          </div>
        </div> */}
        <div className="mx-2 hidden  md:block mt-5">
          <img className="rounded-lg bg-cover" src="/foto_natacao.jpg" alt="" />
          <div className="flex flex-row justify-between items-start mt-4">
            <div>
              <p className="text-lg font-bold text-blue-400 ">Natação</p>
              <p className="text-gray-500 mb-4">Infantil</p>
              {/* <p className="text-sm text-gray-800">Infantil</p> */}
            </div>
          </div>
        </div>
        <div className="mx-2 mt-5">
          <img
            className="rounded-lg bg-cover"
            src="/musculacao_foto.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between items-start mt-4">
            <div>
              <p className="text-lg font-bold text-blue-400 ">Musculação</p>
              <p className="text-gray-500 mb-4">Método Exclusivo</p>
              {/* <p className="text-sm text-gray-800">Infantil</p> */}
            </div>
          </div>
        </div>

        {/* <div className="bg-white block rounded-lg shadow-lg -rotate-2">
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src="/bale_foto.jpg"
                className=" object-cover h-36 w-full md:h-52 md:w-full  rounded-lg"
                alt="fotos"
              />

              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 150"
                style={{ left: 0, bottom: -1 }}>
                <path
                  fill="#fff"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="p-2">
              <h5 className="text-lg font-bold text-orange-400 ">Ballet</h5>
              <p className="text-gray-500 mb-4">Infantil e Adulto </p>
            </div>
          </div> */}
        {/* <div className="bg-white hidden md:block rounded-lg shadow-lg rotate-2">
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src="/judo_foto_pb.jpg"
                className=" object-cover h-36 w-80 md:h-52 md:w-full rounded-lg"
                alt="fotos"
              />

              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 150"
                style={{ left: 0, bottom: -1 }}>
                <path
                  fill="#fff"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="p-2">
              <h5 className="text-lg  text-blue-500 font-bold ">Judô</h5>
              <p className="text-gray-500 mb-4">Infantil</p>
            </div>
          </div> */}

        {/* <div className="bg-white hidden md:block  rounded-lg shadow-lg -rotate-2.5 ">
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src="/muai_foto.jpg"
                className=" object-cover h-36 w-80 md:h-52 md:w-full rounded-lg"
                alt="fotos"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
              </a>
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 150"
                style={{ left: 0, bottom: -1 }}>
                <path
                  fill="#fff"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="p-2">
              <h5 className="text-lg  text-red-500 font-bold ">Muay thai</h5>
              <p className="text-gray-500 mb-4">Jovens e Adultos</p>
            </div>
          </div> */}

        {/* <div className="bg-white  block  rounded-lg shadow-lg rotate-2">
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src="/natacao_foto_pb.jpg"
                className=" w-full h-36  md:h-52 md:w-full  rounded-lg"
                alt="fotos"
              />

              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 150"
                style={{ left: 0, bottom: -1 }}>
                <path
                  fill="#fff"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="p-2">
              <h5 className="text-lg  text-green-500 font-bold ">Natação</h5>
              <p className="text-gray-500 mb-4">Infantil</p>
            </div>
          </div> */}

        {/* <div className="bg-white block  rounded-lg shadow-lg -rotate-2.5">
            <div className="relative overflow-hidden bg-no-repeat bg-cover">
              <img
                src="/musculacao_foto.jpg"
                className=" w-full rounded-t-lg object-cover h-36  md:h-52 md:w-full  rounded-lg"
                alt="fotos"
              />

              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 150"
                style={{ left: 0, bottom: -1 }}>
                <path
                  fill="#fff"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="p-2">
              <h5 className="text-lg  text-blue-500 font-bold ">Musculação</h5>
              <p className="text-gray-500 mb-4">Método Exclusivo</p>
            </div>
          </div> */}
      </div>

      <div className="overflow-auto rounded-lg mb-2 max-h-[500px] ">
        <Aulas aulas={TodasAulas} />
      </div>
    </div>
    // </div>
  );
}
