import React, { useState, useEffect } from 'react';
import OrderSelector from '../../components/OrderSelector';
import TaskCard from '../../components/TaskCard.jsx';
import TaskGenerator from '../../components/TaskGenerator';
import { token } from '../../helpers/consts';
import { getTasksList } from '../../helpers/services/api';

function TasksList() {
  const [newTask, setNewTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const callingTasksList = async () => {
    const data = await getTasksList(1, token);
    setTasksList(data.data.taskList);
  };

  useEffect(() => {
    callingTasksList();
  }, []);

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

        {tasksList.map((task) => (
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
