import React from 'react';

import StyledFormLogin from './StyledFormLogin';

const FormLogin = (props: any): JSX.Element => {
  return (
    <StyledFormLogin>
      <label className="label">
        <input
          type="text"
          className="input"
          name="username"
          placeholder="Nom d'utilisateur"
        />
      </label>

      <label className="label">
        <input
          type="tel"
          className="input"
          name="phone"
          placeholder="Numéro de téléphone"
        />
      </label>

      <label className="label">
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Mot de passe"
        />
      </label>

      <button className="loginBtn">CONNEXION</button>
    </StyledFormLogin>
  );
};

export default FormLogin;
