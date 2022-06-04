import * as React from "react";
import s from "./Task.module.scss";
import icon from "../../../img/icons.svg";
const { task, deleted, title, userCheckbox } = s;
interface ITaskProps {}

const Task: React.FunctionComponent<ITaskProps> = (props) => {
  return (
    <div className={task}>
      <div>
      <input id='input' type="checkbox" />
        <label htmlFor="input" className={userCheckbox}></label>
      </div>
      <h2 className={title}>лох</h2>
      <button className={deleted}>
        <svg width={16} height={16}>
          <use href={`${icon}#delete`} />
        </svg>
      </button>
    </div>
  );
};

export default Task;
