import { Outlet } from "react-router";
import styles from "./Layout.module.scss";
import { useEffect, useState } from "react";
import { Credentials } from "../types/types";
import Button from "../components/Button/Button";
import useLoginStatus from "../hooks/useLoginStatus";

function Layout() {
  const { isLoggedIn, toggleIsLoggedIn, userName } = useLoginStatus();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>FriendNet</div>
        {isLoggedIn ? (
          <div className={styles.logout}>
            <Button
              handleClick={() => toggleIsLoggedIn(false)}
              size="medium"
              color="red"
            >
              Разлогиниться
            </Button>
          </div>
        ) : (
          ""
        )}
      </header>
      <main>
        <Outlet context={{ isLoggedIn, toggleIsLoggedIn, userName }} />
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
