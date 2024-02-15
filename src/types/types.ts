export interface Credentials {
  email: string;
  password: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "red";
  handleClick: () => void;
}
