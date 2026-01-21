import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Onilabs - Laboratorio de Programación</title>
        <meta
          name="description"
          content="Onilabs: Desarrollo web, aplicaciones móviles, microservicios, integraciones y ecommerce WordPress/WooCommerce. Soluciones escalables para tu negocio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          {/* <Projects /> */}
          <Portfolio />
          <Process />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
