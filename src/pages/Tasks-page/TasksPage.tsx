import * as React from 'react';
import Title from '../../components/Title/Title';
import s from './TasksPage.module.scss';
import ButtonTasks from '../../components/Button/ButtonTasks';
import TasksList from '../../components/Tasks-list/TasksList';

const{title,addInput,page,buttons} = s
interface ITasksPageProps {
}

const TasksPage: React.FunctionComponent<ITasksPageProps> = (props) => {
  return(
      <div className={page}>
      <div className={title}><Title/></div>
      <input className={addInput} type='text' placeholder='Добавить задачу'/>
  
      <div className={buttons}>
        <div> <ButtonTasks text={'Очистить'} onClick={()=>{}}/></div>
        <div> <ButtonTasks text={'Добавить'} onClick={()=>{}}/></div>
      </div>
      <TasksList/>
      </div>
  ) ;
};

export default TasksPage;
