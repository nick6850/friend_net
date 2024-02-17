import { Outlet } from "react-router";
import styles from "./Layout.module.scss";
import Button from "../components/Button/Button";
import useLoginStatus from "../hooks/useLoginStatus";

function Layout() {
  const { isLoggedIn, toggleIsLoggedIn, userName } = useLoginStatus();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div>
            <span>🤗</span> FriendNet
          </div>
          <div className={styles.slogan}>Будь с друзьями 24/7</div>
        </div>
        {isLoggedIn ? (
          <div className={styles.logout}>
            <Button
              onClick={() => toggleIsLoggedIn(false)}
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
