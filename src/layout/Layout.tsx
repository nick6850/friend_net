import { Outlet } from "react-router";
import styles from "./Layout.module.scss";
import { useEffect, useState } from "react";
import { Credentials } from "../types/types";
import Button from "../components/Button/Button";

function Layout() {
  const storedName = localStorage.getItem("userName");
  const parsedName = storedName ? JSON.parse(storedName) : "";

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(parsedName) || false);
  const [userName, setUserName] = useState(parsedName);

  function toggleIsLoggedIn() {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  }

  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", JSON.stringify(userName));
    }
  }, [userName]);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>FriendNet</div>
        {isLoggedIn ? (
          <div className={styles.logout}>
            <Button handleClick={toggleIsLoggedIn} size="medium" color="red">
              Разлогиниться
            </Button>
          </div>
        ) : (
          ""
        )}
      </header>
      <main>
        <Outlet
          context={{ isLoggedIn, toggleIsLoggedIn, userName, setUserName }}
        />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerText}>
          &copy; Made by Никита with ❤️ and ☕️
        </div>
      </footer>
    </div>
  );
}

export default Layout;
