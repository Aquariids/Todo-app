import * as React from "react";
import { IForm } from "../../store/slices/authorization-slice/types";
import Form from "../Form/Form";
import s from "./Auth.module.scss";


const {classlogin,} = s;

interface IAuthProps {
  typeForm: IForm,
  login:string,
  password:string,
  error:string
}

const Auth: React.FunctionComponent<IAuthProps> = ({typeForm,login,password,error}) => {
  return (
    <div className={classlogin}>
      <Form />
      
    </div>
    
  );
};

export default Auth;
