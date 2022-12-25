import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {

      }
    ]
  }
]);

export default routes;