import { Outlet } from "react-router";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>FriendNet</div>
      </header>
      <main>
        <Outlet />
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
