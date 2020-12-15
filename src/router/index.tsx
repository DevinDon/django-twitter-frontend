import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadingComponent } from '../components/Loading';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const SignUp = lazy(() => import('../pages/SignUp'))

const Router = () => (
  <Suspense
    fallback={<LoadingComponent></LoadingComponent>}
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route exact path="/test" component={Test} /> */}
    </Switch>
  </Suspense>
);

export default Router;
