import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Login from '../pages/Main/Login';
import Signup from '../pages/Main/Signup';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
]);

export default routes;