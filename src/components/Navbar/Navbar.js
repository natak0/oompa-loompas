import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-umpa-loompa.png";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <section>
      <Link to="/">
        <img src={logo} alt="oompla loompa logo" />
      </Link>
      <h1>Oompa Loompas Crew</h1>
    </section>
  </nav>
);

export default Navbar;
