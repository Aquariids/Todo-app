import * as React from "react";
import FormInput from "../Form-input/FromInput";
import s from "./Form.module.scss";
interface IFormProps {}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  return (
    <div>
      <FormInput type={''} value={''} />
    </div>
  );
};

export default Form;
