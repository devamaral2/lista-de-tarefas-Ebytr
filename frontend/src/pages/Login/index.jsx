import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import * as c from '../../helpers/consts';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [disabled, setDisabled] = useState(true);
  // const history = useHistory();

  useEffect(() => {
    if (c.EMAIL_REGEX.test(email) && password.length > c.MIN_PASSWD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // history.push('/tasks');
  };

  return (
    <>
      <h1>Ebytr Task List</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            onChange={ (e) => setEmail(e.target.value) }
            value={ email }
            placeholder="Enter your e-mail"
            autoComplete="off"
          />
        </label>
        <label id="pass-label" htmlFor="password">
          <input
            id="password"
            type="password"
            onChange={ (e) => setPasswd(e.target.value) }
            value={ password }
            placeholder="Type your password"
          />
        </label>
        <button
          type="submit"
          disabled={ disabled }
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
