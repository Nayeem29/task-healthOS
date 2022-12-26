import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Cart from '../pages/Main/Cart';
import Home from '../pages/Main/Home';
import Login from '../pages/Main/Login';
import Signup from '../pages/Main/Signup';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addToCart',
        element: <Cart />
      },
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