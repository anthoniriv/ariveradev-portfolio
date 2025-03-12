import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import camera from "../../public/camera.png";
import code from "../../public/code.png";
import creativehome from "../../public/creativehome.png";
import lomamarilla from "../../public/lomamarilla.png";
import santed from "../../public/santed.png";
import dsegunda from "../../public/dsegunda.png";
import hoobank from "../../public/hoobank.png";
import impuestosperu from "../../public/impuestosperu.png";
import gruporedsalud from "../../public/gruporedsaludss.png"
import cajatrujillo from "../../public/cajatrujilloss.png";
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
              anthoniriv
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
                  href="https://mega.nz/file/yLJQESpC#cR50hZrgDRM3iDQWaef1XTB6F-b7do3rzZURJtC0DEw"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <a
              href="https://github.com/anthoniriv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="cursor-pointer hover:text-blue-600 ease-in-out duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/anthoniriv01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer hover:text-blue-600 ease-in-out duration-300" />
            </a>
            <a
              href="https://www.youtube.com/@anthoniriv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube className="cursor-pointer hover:text-blue-600 ease-in-out duration-300" />
            </a>
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
              Ofrezco servicios de diseño y desarrollo de páginas web de alta
              calidad y edición audiovisual para clientes en diferentes
              sectores. Mi enfoque se centra en crear{" "}
              <span className="text-blue-500"> soluciones personalizadas </span>
              y eficientes que satisfagan las necesidades específicas de cada
              proyecto. Como experto en diseño web, utilizo las últimas
              tendencias y tecnologías para crear sitios{" "}
              <span className="text-blue-500"> web modernos</span>, atractivos y
              funcionales. Además, también ofrezco servicios de{" "}
              <span className="text-blue-500">edición audiovisual </span>,
              incluyendo la creación de vídeos y la postproducción para mejorar
              la calidad y la estética de tus contenidos.
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
                Diseños modernos
              </h3>
              <p className="py-2 md:text-xl dark:text-white">
                Creación de diseños elegantes adaptados a sus necesidades
                siguiendo las tendencias del día a día.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-white">
                Herramientas de diseño que utilizo
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">AdobeXD</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
            </div>
            <div className="ease-in-out duration-300 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-500">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Sitios web modernos
              </h3>
              <p className="py-2 md:text-xl dark:text-white">
                Desarrollo de aplicaciones moviles, sitios web y aplicativos web
                optimizados para una navegacion fluida
              </p>
              <h4 className="py-4 text-blue-600 dark:text-white">
                Lenguajes que utilizo en el desarrollo
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Angular</p>
              <p className="text-gray-800 py-1 dark:text-white">ReactJs</p>
              <p className="text-gray-800 py-1 dark:text-white">Wordpress</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-b from-blue-500">
              <Image
                src={camera}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Videos atractivos
              </h3>
              <p className="py-2 md:text-xl dark:text-white">
                Creacion de productos audiovisuales de calidad para todo tipo de
                ocaciones.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-white">
                Herramientas de edición que utilizo
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">
                Davinci Resolve
              </p>
              <p className="text-gray-800 py-1 dark:text-white">Premiere</p>
              <p className="text-gray-800 py-1 dark:text-white">
                After Effects
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portafolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Soy un desarrollador Full Stack con
              <span className="text-blue-500"> amplia experiencia </span> en la
              creación de soluciones personalizadas y eficientes para una
              variedad de clientes en diferentes industrias. Mi portafolio
              incluye una amplia variedad de{" "}
              <span className="text-blue-500">proyectos exitosos </span>, desde
              aplicaciones móviles hasta landing pages y aplicaciones web.
              Siempre estoy en busca de nuevos desafíos y soluciones innovadoras
              para satisfacer las necesidades de mis clientes.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a
                href="https://gruporedsalud.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={gruporedsalud}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={cajatrujillo}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://creativehome.pe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={creativehome}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://edificiolomaamarilla.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={lomamarilla}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://www.santed.com.pe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={santed}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://dsegunda.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={dsegunda}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://banco-webmodern.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={hoobank}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.impuestosperu&hl=es_PE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={impuestosperu}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
