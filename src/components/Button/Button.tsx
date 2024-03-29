import styles from "./Button.module.scss";
import { ButtonProps } from "../../types/types";

const Button = (props: ButtonProps) => {
  const { children, size = "", color = "", onClick, ...otherProps } = props;

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]}`}
      onClick={onClick}
      {...otherProps}
    >
      {children || "Нажми на меня"}
    </button>
  );
};

export default Button;
