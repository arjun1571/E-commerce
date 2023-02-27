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
import SignUp from './component/SingnUp/SignUp';
import About from './component/About/About';
import Shiping from './component/Shiping/Shiping';
import PrivateRoute from './Route/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Shop></Shop>,
        },
        {
          path:"/shop",
          element:<Shop></Shop>,
        },
        {
          path: "/inventory",
          element: <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path: "/shiping",
          element: <PrivateRoute>
            <Shiping></Shiping>
          </PrivateRoute>
        },
        {
          path: "login",
          element:<LogIn></LogIn>
        },
        {
          path: "signup",
          element:<SignUp></SignUp>
        },
        {
          path: "about",
          element:<About></About>
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
