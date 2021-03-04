import React, { useState } from 'react';
import RegisterForm from './components/apps/auth/register/registerForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/apps/auth/login/loginForm';
import PersistentDrawer from './components/apps/main/Drawer/drawer';

import DrugDetailTable from './components/apps/main/Drugs/DrugDetail/drugDetail';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <div
        className="d-flex align-items-center flex-column"
        style={{
          height: '100%',
          width: '100%',
          marginTop: '0px',
          marginRight: '0px',
          marginLeft: '0px',
          position: 'fixed',
        }}
      >
        <Switch>
          {!isLoggedIn ? (
            <>
              <Route path="/register" exact={true}>
                <RegisterForm />
              </Route>
              <Route path="/" exact={true}>
                <LoginForm />
              </Route>
            </>
          ) : (
            <>
              <Route path="/" exact={true}>
                <PersistentDrawer />
                {/* <TemporaryDrawer/> */}
              </Route>
              <Route
                path="/detail/:name"
                exact={true}
                component={DrugDetailTable}
              />
            </>
          )}

          <Route path="/*">
            <div style={{ color: 'red' }}>404 Not Found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
