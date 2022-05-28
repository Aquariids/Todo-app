import * as React from "react";
import s from "./ButtonTasks.module.scss";
const { button } = s;
interface IButtonTasksProps {
  color: string;
  text: string;
  onClick: () => void;
}

const ButtonTasks: React.FunctionComponent<IButtonTasksProps> = ({
  color,
  text,
  onClick,
}) => {
  return (
    <button className={button}
      style={{ borderColor: color, boxShadow: `2px 3px 8px ${color}`, color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonTasks;
