import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import code from "../../public/code.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portafolio de Anthoni Rivera</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ease-in-out duration-300 bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="ease-in-out duration-300 text-xl font-burtons dark:text-white">
              developedbysd
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="ease-in-out duration-300 cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="ease-in-out duration-300 text-5xl py-2 text-blue-600 font-medium md:text-6xl">
              Anthoni Rivera
            </h2>
            <h3 className="ease-in-out duration-300 text-2xl py-2 md:text-3xl dark:text-white">
              Fullstack developer.
            </h3>
            <p className="ease-in-out duration-300 text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Born to reborn.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillGithub className="cursor-pointer hover:text-blue-600 ease-in-out duration-300" />
            <AiFillLinkedin className="cursor-pointer hover:text-blue-600 ease-in-out duration-300" />
            <AiFillYoutube className="cursor-pointer hover:text-blue-600 ease-in-out duration-300" />
          </div>
          <div className="ease-in-out duration-300 relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Servicios que ofrezco
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Desde el comienzo de mi carrera como diseñador y desarrollador
              independiente, he trabajado de forma remota para
              <span className="text-blue-500"> agencias </span>
              he consultado para{" "}
              <span className="text-blue-500">startups </span>y he colaborado
              con personas talentosas para crear productos digitales tanto para
              uso empresarial como de consumo.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Ofrezco una amplia gama de servicios, que incluyen diseño de
              marca, programación y enseñanza.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-500">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Diseños hermosos
              </h3>
              <p className="py-2 md:text-xl dark:text-white">
                Creación de diseños elegantes adaptados a sus necesidades
                siguiendo la teoría del diseño.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-white">
                Herramientas de diseño que utilizo
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
            <div className="ease-in-out duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-500">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Sitios web modernos
              </h3>
              <p className="py-2 dark:text-white">
                Creación de diseños elegantes adaptados a sus necesidades
                siguiendo la teoría del diseño.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-white">
                Lenguajes que utilizo en el desarrollo
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Angular</p>
              <p className="text-gray-800 py-1 dark:text-white">ReactJs</p>
              <p className="text-gray-800 py-1 dark:text-white">Next.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-500">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Modern Websites
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-white">
                Designing tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portafolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Desde el comienzo de mi carrera como diseñador y desarrollador
              freelance, he trabajado de forma remota para
              <span className="text-blue-500"> agencias </span>
              consultado para<span className="text-blue-500 ">startups </span>y
              colaborado con personas talentosas para crear productos digitales
              tanto para uso empresarial como para consumidores.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Ofrezco una amplia gama de servicios, incluyendo diseño de marca,
              programación y enseñanza.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
