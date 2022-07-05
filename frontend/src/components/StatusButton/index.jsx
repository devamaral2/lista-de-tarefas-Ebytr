import React from 'react';
import PropTypes from 'prop-types';

function StatusButton({ status, statusClass, clickFunction }) {
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
  statusClass: PropTypes.string,
  clickFunction: PropTypes.func,
}.isRequired;

export default StatusButton;
