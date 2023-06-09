import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  let ids = [1, 2, 5];

  let endpoints = ids.map((id) => `/api/orders/${id}`);
  let promises = endpoints.map((endpoint) => fetch(endpoint));

  Promise.all(promises)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

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
          <Link href="/createOrder">
            <button>Crear Orden</button>
          </Link>
        </ul>
      </Layout>
    </>
  );
}
