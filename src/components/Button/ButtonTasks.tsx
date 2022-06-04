import * as React from "react";
import s from "./ButtonTasks.module.scss";
const { button } = s;
interface IButtonTasksProps {
  text: string;
  onClick: () => void;
}

const ButtonTasks: React.FunctionComponent<IButtonTasksProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      className={button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonTasks;
