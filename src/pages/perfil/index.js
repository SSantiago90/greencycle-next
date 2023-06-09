import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Index";
import Chart from "@/components/Chart";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Perfil() {
  return (
    <>
      <Head>
        <title>Greencycle - Perfil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Mi cuenta </h1>
        <Link href="/perfil/informacion">
          Informacion personal y estadisticas{" "}
        </Link>

        <h2>Soporte </h2>
        <Link href="/perfil/terminos">Terminos y condiciones </Link>
        <Link href="/perfil/terminos">Politicas de privacidad </Link>
      </Layout>
    </>
  );
}
