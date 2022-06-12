import * as React from "react";
import { formToggle, IForm } from "../../store/slices/authorization-slice/types";
import FormButton from "../Form-button/FormButton";
import FormInput from "../Form-input/FormInput";
import s from "./Form.module.scss";
const { form, title } = s;
interface IFormProps {
  typeForm: IForm,
  login:string,
  password:string,
  error:string

}

const Form: React.FunctionComponent<IFormProps> = ({typeForm,login,password,error}) => {
  return (
    <>
      <form className={form}>
        {
        typeForm === formToggle.EXIT? <FormButton onClick={()=> {}} text={'Выйти'}/>:
        typeForm === formToggle.SIGN_UP?
        <>
         <h2 className={title}>Регистрация</h2>
        <FormInput value={"#"} type="text" />
        <FormInput value={"#"} type="password" />
        <FormButton onClick={() => {}} text="Войти" />
        <FormButton onClick={() => {}} text="Зарегестрироваться?"/>
        </>:
         <>
         <h2 className={title}>Вход</h2>
        <FormInput value={"#"} type="text" />
        <FormInput value={"#"} type="password" />
        <FormButton onClick={() => {}} text="Войти" />
        <FormButton onClick={() => {}} text="Зарегестрироваться?"/>
        </>
}
      </form>
    </>
  );
};

export default Form;
