import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <hr />
      {children}
      <hr />
      <Footer />
    </>
  );
};

export default Layout;
