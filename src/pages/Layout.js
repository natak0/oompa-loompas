import React, { useState } from "react";
import Search from "../components/Search/Search";

const Layout = ({ children }) => {
 
  return (
    <section>
      <Search placeholder="Search" />
      <h2 style={{ textAlign: "center" }}>Find Your Oompa Loompa</h2>
      <p style={{ textAlign: "center" }}>There are more than 100K</p>
      {children}
    </section>
  );
};

export default Layout;
