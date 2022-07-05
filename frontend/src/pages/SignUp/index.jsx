import React, { useState } from 'react';
import {
  // useNavigate,
  Link,
} from 'react-router-dom';
import Swal from 'sweetalert2';
import * as c from '../../helpers/consts';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [name, setName] = useState('');
  // const navigate = useNavigate();

  const callingSwal = (icon, text) => Swal.fire({
    icon,
    title: icon === 'error' ? 'Oops...' : 'Pronto',
    text,
  });

  const firingAllSwals = () => {
    if (name.length < c.MIN_NAME_LENGTH) {
      return callingSwal(
        'error',
        'O usuário deve ter três ou mais caracteres.',
      );
    } if (!c.EMAIL_REGEX.test(email)) {
      return callingSwal(
        'error',
        'O email deve ser válido.',
      );
    } if (!c.PASSWORD_REGEX.test(password)) {
      return callingSwal(
        'error',
        'O password deve ter 8 caracteres com pelo menos uma letra maiuscula, um numero e um caracter especial($*&@#).',
      );
    }
    return callingSwal(
      'success',
      'Usuarion criado com sucesso.',
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    firingAllSwals();
    // return navigate('/');
  };

  return (
    <div className="default__container">
      <h1 className="form__title">Criar novo usuário</h1>
      <form className="default__form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">
          <input
            id="name"
            className="form__input"
            type="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Digite seu nome"
          />
        </label>
        <label className="form__label" htmlFor="email">
          <input
            className="form__input"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter com seu e-mail"
            autoComplete="off"
          />
        </label>
        <label className="form__label" id="pass__label" htmlFor="password">
          <input
            id="password"
            className="form__input"
            type="password"
            onChange={(e) => setPasswd(e.target.value)}
            value={password}
            placeholder="Digite seu password"
          />
        </label>
        <button
          className="form__button enabled__form__btn"
          type="submit"
        >
          Criar
        </button>
      </form>
      <Link className="form__link" to="/">Voltar para tela de login</Link>
    </div>
  );
}

export default Login;
