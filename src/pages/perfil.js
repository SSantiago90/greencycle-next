import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Index";
import Chart from "@/components/Chart";
import RegisterForm from "@/components/RegisterForm";
import { useState, useEffect } from "react";
import Image from "next/image";
import AlertButton from "@/components/AlertButton";
import Link from "next/link";
import profileImageMan from "../static/images/profileImageMan.png";

const inter = Inter({ subsets: ["latin"] });

export default function Perfil() {
  const [extractedData, setExtractedData] = useState([]);

  useEffect(() => {
    let id = 3;
    let endpoint = `/api/users/${id}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const extractedData = {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          profileImage: data.image,
          address: data.address.address,
          role: data.role,
          alreadyRecicle: data.alreadyRecicle,
          gender: data.gender,
        };

        console.log(extractedData);
        setExtractedData(extractedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Greencycle - Perfil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Perfil: {extractedData.role}</h1>
        <Chart />

        <div style={{ display: "flex" }}>
          <Image
            src={
              extractedData.profileImage == "" &&
              extractedData.gender === "male"
                ? profileImageMan
                : extractedData.profileImage
            }
            alt={`${extractedData.firstName} profile pic`}
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
          />
          <div>
            {" "}
            <ul>
              <li>
                {" "}
                Icono: {extractedData.firstName} {extractedData.lastName}
              </li>
              <li> Icono: {extractedData.phone}</li>
              <li> Icono: {extractedData.email}</li>
              <li>Icono: {extractedData.address}</li>
            </ul>
          </div>
        </div>
        <div>
          {extractedData.alreadyRecicle === false && (
            <h2>
              You haven't reciclyed anything yet. <br />
              <Link href="/reciclaje">Click Here </Link>
              and start saving the world!{" "}
            </h2>
          )}
        </div>

        <AlertButton
          label={`Change profile to: ${
            extractedData.role === "reciclador" ? "Reciclador" : "Recolector"
          }`}
          alertMessage="You'll change your role to: sarasa are you sure?"
        />
        <AlertButton
          label="Close session"
          alertMessage="Are you sure you want to close session?"
        />
        <AlertButton
          label="Delete Account"
          alertMessage="Are you sure you want to delete your account? This process cannot be reversed"
        />
      </Layout>
    </>
  );
}
