import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type, email, placeholder, setEmail,
}) {
  return (
    <label className="form__label" htmlFor={type}>
      <input
        className="form__input"
        id={type}
        type={type}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder={placeholder}
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  email: PropTypes.string,
  placeholder: PropTypes.string,
  setEmail: PropTypes.func,
}.isRequired;

export default Input;
