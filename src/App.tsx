import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.scss';
import AuthContainer from './components/Auth/auth/auth-Container';
import MainPage from './pages/Main-page/MainPage';
import TasksPage from './pages/Tasks-page/TasksPage';
import { formToggle } from './store/slices/authorization-slice/types';

function App() {
  
  return (
    <div className="app">
      
      <div className='login'><AuthContainer/></div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/tasks' element={<TasksPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
