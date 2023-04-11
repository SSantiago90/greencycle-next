import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#F4F2EC" }}
      role="navigation"
      aria-label="main navigation"
      className="nav_container"
    >
      <div className="logo">
        <strong>
          <Link href="/">GreenCycle</Link>
        </strong>
      </div>
      {/* <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
      </ul>
      <li>
        <Link href="/createOrder">Reciclaje</Link>
      </li>
      <ul>
        <Link href="/login">Iniciar sesión</Link>
      </ul>
      <ul>
        <Link href="/perfil">Perfil</Link>
      </ul> */}
      <ul>
        <li>
          <Link href="/nosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link href="/noticias">Noticias</Link>
        </li>
        <li>
          <Link href="/preguntasfrecuentes">Preguntas Frecuentes</Link>
        </li>
        <li className="link_login">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
