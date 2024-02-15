import { useOutletContext } from "react-router";
import { AuthState } from "../../types/types";
import Button from "../Button/Button";
import { useState } from "react";
import { getChineseZodiacAnimal } from "../../helpers/infoHelper";
import style from "./Info.module.scss";

function Info() {
  const { userName } = useOutletContext<AuthState>();
  const [isChineseFormat, setChineseFormat] = useState(false);

  function toggleChineseFormat() {
    setChineseFormat((prevIsChineseFormat) => !prevIsChineseFormat);
  }

  return (
    <div className={style.container}>
      <h1>Привет, {userName}!</h1>
      <div className={style.year}>
        На дворе
        {isChineseFormat
          ? " год " + getChineseZodiacAnimal()
          : " " + new Date().getFullYear() + " год"}
        .
      </div>
      <div>
        Если предпочитаешь отображение года в другом формате, нажми на
        <Button
          color={isChineseFormat ? "green" : "blue"}
          handleClick={toggleChineseFormat}
          size="small"
        >
          кнопку
        </Button>
      </div>
    </div>
  );
}

export default Info;
