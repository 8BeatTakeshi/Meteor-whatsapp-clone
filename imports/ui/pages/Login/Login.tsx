import React from 'react';
import { Meteor } from 'meteor/meteor';

import RighImg from '../../components/RightImg/RightImg';
import FormLogin from '../../components/FormLogin/FormLogin';

const Login = (props: any): JSX.Element => {
  const messageText: string = 'Connectez vous afin de lancer une conversation';
  const handleLogin = (state: any): void => {
    Meteor.call('users.login', state, (err, res) => {
      if (err) {
        console.log('Error login: ', err);
      } else {
        console.log('Results: ', res);
      }
    });
  };

  return (
    <RighImg messageText={messageText}>
      <FormLogin onLogin={handleLogin} />
    </RighImg>
  );
};

export default Login;
