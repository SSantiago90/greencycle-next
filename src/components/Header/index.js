import Image from "next/image";
import React from "react";
import recycleSVG from "../../assets/svg/recycling-home.svg";
import styles from "./style.module.css";
import Button from "../Button";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_body}>
        <h2>
          ¿Qué es <span className="text-primary">GreenCycle?</span>
        </h2>
        <p>
          Green Cycle es una aplicación que conecta a usuarios que buscan ayudar
          al medio ambiente reciclando, pero carecen de tiempo o información
          sobre como hacerlo, con recolectores que se encargan de retirar el
          material de reciclaje y entregarlo a organizaciones que garanticen su
          reciclaje. Green Cycle nace bajo la consigna Reducir, Reutilizar,
          Reciclar
        </p>
        <Link href="/registro">
          <Button size="small">Empezar a reciclar</Button>
        </Link>
      </div>
      <div className={styles.header_img}>
        <Image
          width="1620"
          style={{
            display: "block",
            zIndex: -1,
          }}
          src={recycleSVG}
          alt="svg"
        />
      </div>
    </div>
  );
}

export default Header;
