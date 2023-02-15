import './App.css';
import Main from './Layout/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Header/Shop/Shop';
import Inventory from './component/Header/Invetory/Inventory';
import LogIn from './component/Header/LogIN/LogIn';
import Order from './component/Order/Order';
import { productAndCartLoder } from './loders/Product&Cartloder';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/shop",
          element:<Shop></Shop>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "login",
          element:<LogIn></LogIn>
        },
        {
          path: "order",
          loader:productAndCartLoder,
          element:<Order></Order>
        }

      ]
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
