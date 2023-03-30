// components/layout.js

import NavBar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <main className="container">
      <NavBar />
      <section>{children}</section>
    </main>
  );
}
