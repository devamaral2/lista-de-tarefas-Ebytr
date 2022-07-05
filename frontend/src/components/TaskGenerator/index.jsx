import React from 'react';
import PropTypes from 'prop-types';

function TaskGenerator({ setNewTask, newTask }) {
  return (
    <div className="task_list__container__input">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control task_list__input"
          placeholder="Adicionar nova task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Criar
        </button>
      </div>
    </div>
  );
}

TaskGenerator.propTypes = {
  newTask: PropTypes.string,
  setNewTask: PropTypes.func,
}.isRequired;

export default TaskGenerator;
