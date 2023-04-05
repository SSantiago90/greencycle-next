import NavBar from "@/components/Navbar";
import classNames from "classnames";

export default function Layout({ children, bg }) {
  const classNamesMain = classNames(bg);
  return (
    <main className={bg}>
      <NavBar />
      <section className="container">{children}</section>
    </main>
  );
}
