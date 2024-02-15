import { Outlet } from "react-router";
import styles from "./Layout.module.scss";
import { useState } from "react";
import { Credentials } from "../types/types";

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function toggleIsLoggedIn() {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  }

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>FriendNet</div>
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
