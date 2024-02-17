import { Link } from "react-router-dom";
import style from "./ErrorPage.module.scss";

function ErrorPage() {
  return (
    <div className={style.error}>
      Ууууупс, этой страницы не существует! 😔 <br />
      <Link to="/">Перейти на главную страницу</Link>
    </div>
  );
}

export default ErrorPage;
