import Link from "next/link";

const Navbar = () => {
  return (
    <nav role="navigation" aria-label="main navigation">
      <ul>
        <Link href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </ul>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
      </ul>
      <li>
        <Link href="/reciclaje">Reciclaje</Link>
      </li>
      <ul>
        <Link href="/login">Iniciar sesión</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
