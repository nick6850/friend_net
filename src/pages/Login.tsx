import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login page</h1>
      <label htmlFor="email">Your login</label>
      <input id="email" type="email" placeholder="Type in your email..." />
      <label htmlFor="password">Your password:</label>
      <input
        id="password"
        type="password"
        placeholder="Type in your password..."
      />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
