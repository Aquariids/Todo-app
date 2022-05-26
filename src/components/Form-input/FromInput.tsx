import * as React from "react";
import s from "./FormInput.module.scss";

const { input } = s;
interface IFormInputProps {
  value: string;
  type: string;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  value,
  type,
}) => (
  <input
    className={input}
    type={type}
    value=""
    placeholder={type === "signIn" ? "Логин" : "Пароль"}
  />
);

export default FormInput;
