import React from 'react';

import RighImg from '../../components/RightImg/RightImg';
import FormLogin from '../../components/FormLogin/FormLogin';

const Login = (props: any): JSX.Element => {
  const messageText: string = 'Connectez vous afin de lancer une conversation';
  const handleLogin = (state: any): void => {};

  return (
    <RighImg messageText={messageText}>
      <FormLogin onLogin={handleLogin} />
    </RighImg>
  );
};

export default Login;
