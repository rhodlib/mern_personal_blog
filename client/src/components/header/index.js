import React from "react";
import { Link, useHistory } from "react-router-dom";
import Style from "./Header.module.css";

const Header = () => {
  let history = useHistory();

  const handleClearStorage = () => {
    if (sessionStorage.token) {
      sessionStorage.removeItem("token");
      history.push("/");
    }
  };

  const loginLogout = () => {
	const withToken = [<Link onClick={handleClearStorage}>Logout</Link>, <Link to="/new/article">Create</Link>]
    return sessionStorage.token ? (
      (withToken.map(link => link))
    ) : (
      <Link to="/login">Login</Link>
    );
  };

  return (
    <header className={Style.header}>
      <h1>Rhodlib.me</h1>
      <nav>
        <Link to="/">blog</Link>
        {loginLogout()}
      </nav>
    </header>
  );
};

export default Header;
