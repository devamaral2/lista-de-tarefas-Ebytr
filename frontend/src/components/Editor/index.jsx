import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import StatusButton from '../StatusButton';
import { RiSendPlane2Fill } from 'react-icons/ri';

function Editor({
  editedStatus, editedTask, setEditedStatus, setEditedTask, statusClass,
}) {
  return (
    <div className="task_editor">
      <div className="task_list__editor__container__input">
        <Input
          type="task"
          state={editedTask}
          setting={setEditedTask}
          placeholder="Edite sua task aqui"
        />
      </div>
      <StatusButton
        status={editedStatus}
        statusClass={statusClass}
        clickFunction={setEditedStatus}
      />
      <RiSendPlane2Fill
        className="task_list__editor__send_button"
        onClick={() => alert('asdawd')}
        />
    </div>
  );
}

Editor.propTypes = {
  editedStatus: PropTypes.func,
  statusClass: PropTypes.string,
  setEditedStatus: PropTypes.func,
}.isRequired;

export default Editor;
