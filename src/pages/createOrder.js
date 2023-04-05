import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import RegisterForm from "@/components/RegisterForm";
import OrderForm from "@/components/OrderForm";
import RecyclingForm from "@/components/RecicloForm";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  return (
    <>
      <Head>
        <title>Greencycle - Crear solicitud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Crear orden</h1>
        <OrderForm />
      </Layout>
    </>
  );
}