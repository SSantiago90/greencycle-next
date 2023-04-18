import React from "react";
import { BsTruck } from "react-icons/bs";

let fecha = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <h3>GreenCycle</h3>
      <BsTruck />
      <div className="footer_ruta"></div>
      <p>Todos los derechos de autor reservados GreenCycle© {fecha}</p>
    </footer>
  );
};

export default Footer;
