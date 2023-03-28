// components/layout.js

import NavBar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
