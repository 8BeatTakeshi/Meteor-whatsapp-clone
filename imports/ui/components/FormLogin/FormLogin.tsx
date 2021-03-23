import React from 'react';

import StyledFormLogin from './StyledFormLogin';

const FormLogin = (props: any): JSX.Element => {
  const [state, setState] = React.useState<any>({
    username: '',
    phone: '',
    password: '',
  });
  const { username, phone, password } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const inputName: string = e.target.name;
    setState((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  return (
    <StyledFormLogin>
      <label className="label">
        <input
          type="text"
          className="input"
          name="username"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={handleChange}
        />
      </label>

      <label className="label">
        <input
          type="tel"
          className="input"
          name="phone"
          placeholder="Numéro de téléphone"
          value={phone}
          onChange={handleChange}
        />
      </label>

      <label className="label">
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button onClick={() => props.onLogin(state)} className="loginBtn">
        CONNEXION
      </button>
    </StyledFormLogin>
  );
};

export default FormLogin;
