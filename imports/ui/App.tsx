import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

import theme from './theme/NormalTheme';

const App = (porps: any): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chats" component={Main} />

          {/* <Route exact path="/test" component={RightImg} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
