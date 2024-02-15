import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { Credentials } from "../../types/types";
import Button from "../../components/Button/Button";

function Login() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    setError("");
    if (
      credentials.email === "admin@friendnet.com" &&
      credentials.password === "admin"
    ) {
      setIsLoggedIn(true);
    } else {
      setError("Неверный логин или пароль");
    }
  };

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    setCredentials({ email: "", password: "" });
  };

  if (isLoggedIn) {
    navigate("/home");
    return null;
  }

  return (
    <form className={styles.form}>
      <label>
        Ваш email:
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </label>

      <Button handleClick={handleLogin} size="medium" color="blue">
        Войти
      </Button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
}

export default Login;
