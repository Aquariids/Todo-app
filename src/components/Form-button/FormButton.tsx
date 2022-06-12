import * as React from "react";
import s from "./FormButton.module.scss";
const {button} = s;

interface IFormButtonProps {
  onClick: (e:React.FormEvent<HTMLButtonElement>) => void;
  text: string;
}

const FormButton: React.FunctionComponent<IFormButtonProps> = ({
  onClick,
  text,
}) => <button className={button} onClick={onClick}>{text}</button>;

export default FormButton;
