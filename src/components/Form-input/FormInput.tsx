import * as React from "react";
import { changeLogin, changePassword } from "../../store/slices/authorization-slice/authorization-slice";
import { Dispatch } from "../../store/store";
import s from "./FormInput.module.scss";

const { input } = s;
interface IFormInputProps {
  value: string;
  type: string;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  value,
  type,
}) => {
  const dispatch = Dispatch();
  return (
    <input
      className={input}
      type={type}
      value={value}
      onChange={(e) =>
        type === "text"
          ? dispatch(changeLogin(e.target.value))
          : dispatch(changePassword(e.target.value))
      }
      placeholder={type === "text" ? "Логин" : "Пароль"}
    />
  );
};

export default FormInput;
