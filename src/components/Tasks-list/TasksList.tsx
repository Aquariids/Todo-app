import * as React from "react";
import Task from "./Task/Task";
import s from "./TasksList.module.scss";
const { list } = s;
interface ITasksListProps {}

const TasksList: React.FunctionComponent<ITasksListProps> = (props) => {
  return <ul className={list}>
    <Task/>
    <Task/>
    <Task/>
    <Task/>
  </ul>;
};

export default TasksList;
