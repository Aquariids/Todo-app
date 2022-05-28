import * as React from "react";
import s from "./Title.module.scss";
const {title,spanColor1,spanColor2} = s;
interface ITitleProps {}

const Title: React.FunctionComponent<ITitleProps> = () => (
  <h1 className={title}>
    <span className={spanColor1}>Менеджер </span>
    <span className={spanColor2}>Задач</span>
  </h1>
);

export default Title;
