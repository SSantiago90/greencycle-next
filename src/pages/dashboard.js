import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Head>
        <title>Greencycle - Perfil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Mi Panel de usuario</h1>
        <ul>
          <li>Mis Datos</li>
          <li>Mis órdenes</li>
        </ul>
      </Layout>
    </>
  );
}
