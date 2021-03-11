import React, { useState } from 'react';
import RegisterForm from './components/apps/auth/register/registerForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/apps/auth/login/loginForm';
import PersistentDrawer from './components/apps/main/Drawer/drawer';

import Error404 from './components/apps/main/error404/error';

import { DoctorProvider } from './components/apps/main/Context/DoctorContext';
import { DrugProvider } from './components/apps/main/Context/DrugContext';
import { ConsumerProvider } from './components/apps/main/Context/ConsumerContext';
import { PharmacyProvider } from './components/apps/main/Context/PharmacyContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <DoctorProvider>
      <DrugProvider>
        <ConsumerProvider>
          <PharmacyProvider>
      <Router>
        <div
          className="d-flex align-items-center flex-column"
          style={{
            height: '100%',
            width: '100%',
            marginTop: '0px',
            marginRight: '0px',
            marginLeft: '0px',
            position: 'fixed'
          }}
        >
          <Switch>
            {!isLoggedIn ? (
              <>
                <Route path="/register" exact={true}>
                  <RegisterForm />
                </Route>
                <Route path="/login" exact={true}>
                  <LoginForm />
                </Route>
              </>
            ) : (
              <>
                <PersistentDrawer />
              </>
            )}
            <Route path="/error404" exact={true}>
              <Error404 />
            </Route>
          </Switch>
        </div>
            </Router>
            </PharmacyProvider>
          </ConsumerProvider>
        </DrugProvider>
    </DoctorProvider>
  );
}

export default App;
