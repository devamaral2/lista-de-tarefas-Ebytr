import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as c from '../../helpers/consts';
import Input from '../../components/Input';

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
      <h1 className="form__title">Ebytr Task List</h1>
      <form className="default__form" onSubmit={handleSubmit}>
        <Input
          type="email"
          state={email}
          setting={setEmail}
          placeholder="Enter com o seu e-mail"
        />
        <Input
          type="password"
          state={password}
          setting={setPasswd}
          placeholder="Digite seu password"
        />
        <button
          className={`form__button ${disabled ? 'disabled__form__btn' : 'enabled__form__btn'}`}
          type="submit"
          disabled={disabled}
        >
          Entrar
        </button>
      </form>
      <Link className="form__link" to="/signup">Criar novo usuário</Link>
    </div>
  );
}

export default Login;
