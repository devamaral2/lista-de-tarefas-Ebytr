import React from 'react';

function TasksList() {
  return (
    <div className="default__container">
      <h1 className="form__title">Tasks do Reginaldo</h1>
      <div className="task_list__container__input">
        <div className="input-group mb-3">
          <input type="text" className="form-control task_list__input" placeholder="Adicionar nova task" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>

      <div className="task__list">

        <div className="card task">
          <div className="card-body task__body">
            <h6 className="card-title task__title">Card title</h6>
            <p className="card-subtitle mb-2 text-muted task__date">Card subtitle</p>
          </div>
          <div className="task__controllers">
            <h5>teste</h5>
            <h5>teste</h5>
          </div>
        </div>
        <div className="card task">
          <div className="card-body">
            <h6 className="card-title task__title">Card title</h6>
            <p className="card-subtitle mb-2 text-muted task__date">Card subtitle</p>
          </div>
          <div className="task__controllers">
            <h5>teste</h5>
            <h5>teste</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksList;
