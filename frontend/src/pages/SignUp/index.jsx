import React, { useState } from 'react';
import {
  // useNavigate,
  Link,
} from 'react-router-dom';
import Swal from 'sweetalert2';
import * as c from '../../helpers/consts';
import Input from '../../components/Input';

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
        <Input
          type="name"
          state={name}
          setting={setName}
          placeholder="Digite seu nome"
        />
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
