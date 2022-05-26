import * as React from 'react';
import s from './FormButton.module.scss';
interface IFormButtonProps {
  onClick:()=>void;
  text:string;
}

const FormButton: React.FunctionComponent<IFormButtonProps> = ({onClick,text}) => <button onClick={onClick}>{text}</button>

export default FormButton;
