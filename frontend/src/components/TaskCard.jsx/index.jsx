import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GrTrash } from 'react-icons/gr';
import StatusButton from '../StatusButton';
import Editor from '../Editor';

function TaskCard({
  handleEditing, status, task, date,
}) {
  const [editor, setEditor] = useState(false);
  const [editedTask, setEditedTask] = useState('');
  const [editedStatus, setEditedStatus] = useState('pendente');

  const startEditor = () => setEditor(true);

  return (
    <div className="card task">
      { !editor ? (
        <>
          <div className="card-body task__body">
            <h6 className="card-title task__title">{task}</h6>
            <p className="card-subtitle mb-2 text-muted task__date">{date}</p>
          </div>
          <div className="task__controllers">
            <StatusButton
              status={status}
              clickFunction={startEditor}
            />
            <div>
              <GrTrash className="task_list__trash" />
            </div>
          </div>

        </>

      ) : (
        <Editor
          handleEditing={handleEditing}
          editedStatus={editedStatus}
          setEditedStatus={setEditedStatus}
          // setEditedStatus={handleEditingStatus}
          editedTask={editedTask}
          setEditedTask={setEditedTask}
        />
      )}
    </div>

  );
}

TaskCard.propTypes = {
  status: PropTypes.string,
  task: PropTypes.string,
  date: PropTypes.string,
  handleEditing: PropTypes.func,
}.isRequired;

export default TaskCard;
