import * as React from "react";
import { formToggle, IForm } from "../../store/slices/authorization-slice/types";
import { onSubmit, onToggleForm } from "../../utils/utils";
import FormButton from "../Form-button/FormButton";
import FormInput from "../Form-input/FormInput";
import s from "./Form.module.scss";
import { Dispatch,Selector } from "../../store/store";
import { toggle } from "../../store/slices/authorization-slice/authorization-slice";
const { form, title } = s;
interface IFormProps {
  typeForm: IForm,
  login:string,
  password:string,
  error:string

}

const Form: React.FunctionComponent<IFormProps> = ({typeForm,login,password,error}) => {
  const dispatch = Dispatch();
  return (
    <>
      <form className={form}>
        {
        typeForm === formToggle.EXIT? <FormButton onClick={e=>onSubmit(formToggle.EXIT,dispatch,e)} text={'Выйти'}/>:
        typeForm === formToggle.SIGN_UP?
        <>
         <h2 className={title}>Регистрация</h2>
        <FormInput value={login} type="text" />
        <FormInput value={password} type="password" />
        <FormButton onClick={e=>onSubmit(formToggle.SIGN_UP,dispatch,e)} text="Войти" />
        <FormButton onClick={e => onToggleForm(formToggle.SIGN_IN, dispatch,e)} text="Зарегестрироваться?"/>
        </>:
         <>
         <h2 className={title}>Вход</h2>
        <FormInput value={login} type="text" />
        <FormInput value={password} type="password" />
        <FormButton onClick= {e=>onSubmit(formToggle.SIGN_IN,dispatch,e)} text="Зарегестрироваться" />
        <FormButton onClick={e => onToggleForm(formToggle.SIGN_UP, dispatch,e)} text="Войти?"/>
        </>
}
      </form>
    </>
  );
};

export default Form;
