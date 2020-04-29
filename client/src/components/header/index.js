import React from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";

const Header = () => {
  const handleClearStorage = () => {
    if (sessionStorage.token) {
      sessionStorage.removeItem("token");
    }
  };

  const loginLogout = () => {
    return sessionStorage.token ? (
      <>
        <Link onClick={handleClearStorage} to="/">
          Logout
        </Link>
        <Link to="/new/article">Create</Link>
      </>
    ) : (
      <Link to="/login">Login</Link>
    );
  };

  return (
    <header className={Style.header}>
      <h1>Rhodlib</h1>
      <nav>
        <Link to="/">blog</Link>
        {loginLogout()}
      </nav>
    </header>
  );
};

export default Header;
