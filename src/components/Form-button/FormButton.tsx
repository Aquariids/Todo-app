import * as React from "react";
import s from "./FormButton.module.scss";
const {button} = s;

interface IFormButtonProps {
  onClick: () => void;
  text: string;
  hideBorder:string;
}

const FormButton: React.FunctionComponent<IFormButtonProps> = ({
  onClick,
  text,
  hideBorder,
}) => <button style={{border:hideBorder}} className={button} onClick={onClick}>{text}</button>;

export default FormButton;
