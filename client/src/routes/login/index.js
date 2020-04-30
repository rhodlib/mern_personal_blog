import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Style from "./Login.module.css";
import axios from "axios";

const Login = () => {
  let history = useHistory();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = async (event) => {
	event.preventDefault();
	try {
		const response = await axios.post(
		  "https://rhodlib-blog.herokuapp.com/api/user/login",
		  loginForm
		);
		sessionStorage.setItem("token", response.data.token);
		if (sessionStorage.token) {
		  history.push("/");
		}
	} catch(err) {
		console.log({error: err});
	}
  };

  return (
    <div className={Style.login}>
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          placeholder="Email"
          type="email"
          required
          name="email"
          value={loginForm.email}
          onChange={handleInputChange}
        />
        <input
          placeholder="Password"
          type="password"
          required
          name="password"
          value={loginForm.password}
          onChange={handleInputChange}
        />
        <button type="submit">access</button>
      </form>
    </div>
  );
};

export default Login;
