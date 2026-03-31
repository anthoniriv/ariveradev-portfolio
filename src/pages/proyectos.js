import Head from "next/head";
import Navbar from "../components/Navbar";
import AllProjects from "../components/AllProjects";
import Footer from "../components/Footer";

export default function ProyectosPage() {
  return (
    <>
      <Head>
        <title>Proyectos - Onilabs</title>
        <meta name="description" content="Todos los proyectos desarrollados por Onilabs: ecommerce, plataformas corporativas, apps móviles y más." />
      </Head>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <AllProjects />
        </main>
        <Footer />
      </div>
    </>
  );
}
