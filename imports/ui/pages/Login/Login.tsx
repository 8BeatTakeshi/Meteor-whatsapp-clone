import React from 'react';

import RighImg from '../../components/RightImg/RightImg';
import FormLogin from '../../components/FormLogin/FormLogin';

const Login = (props: any): JSX.Element => {
  const messageText: string = 'Connectez vous afin de lancer une conversation';

  return (
    <RighImg messageText={messageText}>
      <FormLogin />
    </RighImg>
  );
};

export default Login;
