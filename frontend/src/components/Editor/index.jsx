import React from 'react';
import PropTypes from 'prop-types';
import { RiSendPlane2Fill } from 'react-icons/ri';
import Input from '../Input';
import StatusButton from '../StatusButton';

function Editor({
  editedStatus, editedTask, setEditedStatus, setEditedTask, handleEditing,
}) {
  const handleStatusChange = () => {
    if (editedStatus === 'pendente') return setEditedStatus('em andamento');
    if (editedStatus === 'em andamento') return setEditedStatus('pronto');
    return setEditedStatus('pendente');
  };
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
        clickFunction={handleStatusChange}
      />
      <RiSendPlane2Fill
        className="task_list__editor__send_button"
        onClick={handleEditing}
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
