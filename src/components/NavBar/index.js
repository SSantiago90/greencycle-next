import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "white" }}
      role="navigation"
      aria-label="main navigation"
    >
      <ul className="text-primary">
        <strong>
          <Link href="/">GreenCylce</Link>
        </strong>
      </ul>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navbar;
