import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth/Auth';
import MainPage from './pages/Main-page/MainPage';
import TasksPage from './pages/Tasks-page/TasksPage';

function App() {
  
  return (
    <div className="app">
      <div className='login'><Auth/></div>
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
