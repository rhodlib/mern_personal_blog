import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <hr />
        {children}
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Layout;
