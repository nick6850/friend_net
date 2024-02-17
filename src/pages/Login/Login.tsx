import React, { useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import styles from "./Login.module.scss";
import { AuthState, Credentials } from "../../types/types";
import Button from "../../components/Button/Button";

function Login() {
  const { isLoggedIn, toggleIsLoggedIn } = useOutletContext<AuthState>();
  const [credentials, setCredentials] = useState<Credentials>({
    name: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    setError("");
    if (credentials.name.length >= 3 && credentials.password.length >= 5) {
      toggleIsLoggedIn(true, credentials.name);
      setCredentials({ name: "", password: "" });
    } else {
      setError("Имя или пароль слишком короткие :(");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form className={styles.form}>
      <label>
        Твоё имя:
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleInputChange}
          required
          minLength={3}
        />
      </label>
      <label>
        Пароль :
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          required
          minLength={5}
        />
      </label>

      <Button onClick={handleLogin} size="medium" color="blue">
        Войти
      </Button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
}

export default Login;
