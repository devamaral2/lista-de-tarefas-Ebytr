import React, { useState } from 'react';
import OrderSelector from '../../components/OrderSelector';
import TaskCard from '../../components/TaskCard.jsx';
import TaskGenerator from '../../components/TaskGenerator';

function TasksList() {
  const [newTask, setNewTask] = useState('');
  const date = new Date();
  const taskList = [
    {
      id: 1, task: 'caminhar', status: 'pendente', date: date.getTime(),
    },
    {
      id: 2, task: 'caminhar', status: 'em andamento', date: date.getTime(),
    },
    {
      id: 3, task: 'caminhar', status: 'pronto', date: date.getTime(),
    },
    {
      id: 4, task: 'caminhar', status: 'pendente', date: date.getTime(),
    },
  ];

  const handleTaskGeneration = () => {

  };

  const handleEditing = () => {

  };

  return (
    <div className="default__container">
      <h1 className="form__title">Tasks do Reginaldo</h1>
      <TaskGenerator
        newTask={newTask}
        setNewTask={setNewTask}
        handleTaskGeneration={handleTaskGeneration}
      />

      <OrderSelector />
      <div className="task__list">

        {taskList.map((task) => (
          <TaskCard
            key={task.id}
            task={task.task}
            date={task.date}
            status={task.status}
            handleEdditing={handleEditing}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksList;
