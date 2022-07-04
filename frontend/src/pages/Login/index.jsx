import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as c from '../../helpers/consts';
import './login.css';

// import { fetchData } from '../../helpers/services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (c.EMAIL_REGEX.test(email) && c.PASSWORD_REGEX.test(password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, email]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/tasks');
  };

  return (
    <div className="default__container">
      <h1 className="login__title">Ebytr Task List</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">
          <input
            className="login__input"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your e-mail"
            autoComplete="off"
          />
        </label>
        <label className="login__label" id="pass__label" htmlFor="password">
          <input
            id="password"
            className="login__input"
            type="password"
            onChange={(e) => setPasswd(e.target.value)}
            value={password}
            placeholder="Type your password"
          />
        </label>
        <button
          className={`login__button ${disabled ? 'disabled-login-btn' : 'login-button'}`}
          type="submit"
          disabled={disabled}
        >
          Entrar
        </button>
      </form>
      <Link className="login__link" to="/signup">Criar novo usuário</Link>
    </div>
  );
}

export default Login;
