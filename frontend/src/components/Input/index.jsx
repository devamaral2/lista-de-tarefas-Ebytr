import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type, state, placeholder, setting,
}) {
  return (
    <label className="form__label" htmlFor={type}>
      <input
        className="form__input"
        id={type}
        type={type}
        onChange={(e) => setting(e.target.value)}
        value={state}
        placeholder={placeholder}
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  state: PropTypes.string,
  placeholder: PropTypes.string,
  setting: PropTypes.func,
}.isRequired;

export default Input;
