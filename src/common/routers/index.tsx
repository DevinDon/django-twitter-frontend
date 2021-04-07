import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('../../Home'));
const Login = lazy(() => import('../../Login'));
const SignUp = lazy(() => import('../../SignUp'));
const Tweet = lazy(() => import('../../Tweet'));
const User = lazy(() => import('../../User'));
const Test = lazy(() => import('../components/Test'));
const NotFound = lazy(() => import('../../NotFound'));

const Router = () => (
  <Suspense
    fallback={<Loading></Loading>}
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/tweet/:id" component={Tweet} />
      <Route exact path="/user/:id" component={User} />
      <Route exact path="/test" component={Test} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Router;
