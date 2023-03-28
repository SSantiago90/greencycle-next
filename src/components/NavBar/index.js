import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <button
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className="navbar-start">
        <Link className="navbar-item" href="/">
          Inicio
        </Link>
        <Link className="navbar-item" href="/reciclaje">
          Reciclaje
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" href="/login">
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
