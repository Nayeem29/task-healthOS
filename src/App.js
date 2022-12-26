import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
// import Navbar from "./layout/Main/Navbar";
import routes from "./router/routes";


function App() {
  return (
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;
