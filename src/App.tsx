import { useLocation } from 'react-router-dom';
import Toolbar from './common/components/ToolBar';
import Router from './common/routers';
import NotFound from './NotFound';
import TopBar from './NotFound/components';

export const App = () => {
  const { pathname } = useLocation();

  const setToolbar = () => {
    switch (pathname) {
      case '/login':
      case '/signup':
        return <></>;
      case '/':
        return <Toolbar></Toolbar>;
      default:
        return <TopBar></TopBar>;
    }
  }

  return (
    <>
      {setToolbar()}
      <Router></Router>
    </>
  );
}

export default App;
