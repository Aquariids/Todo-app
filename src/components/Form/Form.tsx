import * as React from "react";
import FormButton from "../Form-button/FormButton";
import FormInput from "../Form-input/FormInput";
import s from "./Form.module.scss";
const { login, title } = s;
interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  return (
    <>
      <form className={login}>
        <h2 className={title}>Вход</h2>
        <FormInput value={"#"} type="text" />
        <FormInput value={"#"} type="password" />
        <FormButton onClick={() => {}} text="Войти" />
        <FormButton onClick={() => {}} text="Зарегестрироваться?" />
      </form>
    </>
  );
};

export default Form;
