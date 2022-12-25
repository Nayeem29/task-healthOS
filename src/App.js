import { RouterProvider } from "react-router-dom";
// import Navbar from "./layout/Main/Navbar";
import routes from "./router/routes";


function App() {
  return (
    <div >

      <RouterProvider router={routes} />

    </div>
  );
}

export default App;
