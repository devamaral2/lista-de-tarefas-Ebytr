import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function StatusButton({ status, clickFunction }) {
  const [statusClass, setStatusClass] = useState('warning');
  const getingStatusClass = () => {
    if (status === 'pendente') return setStatusClass('warning');
    if (status === 'em andamento') return setStatusClass('primary');
    return setStatusClass('success');
  };

  useEffect(() => {
    getingStatusClass();
  }, [status]);

  return (
    <button
      type="button"
      className={`btn btn-outline-${statusClass}`}
      onClick={clickFunction}
    >
      {status}
    </button>
  );
}

StatusButton.propTypes = {
  status: PropTypes.string,
  clickFunction: PropTypes.func,
}.isRequired;

export default StatusButton;
