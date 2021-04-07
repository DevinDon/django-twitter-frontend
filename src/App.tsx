import { useLocation } from 'react-router-dom';
import Toolbar from './common/components/ToolBar';
import Router from './common/routers';

export const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes('/login') || pathname.includes('/signup') || <Toolbar></Toolbar>}
      <Router></Router>
    </>
  );
}

export default App;
