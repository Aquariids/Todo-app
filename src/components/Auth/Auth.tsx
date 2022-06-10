import * as React from "react";
import Form from "../Form/Form";
import s from "./Auth.module.scss";
import icon from '../../img/icons.svg'

const {login,gitIcon} = s;

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <div className={login}>
      <Form />
      <div>
      
      </div>
    </div>
    
  );
};

export default Auth;
