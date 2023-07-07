import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { LoginComponent } from './components/loginComponent';



const router = createBrowserRouter([
  {
    path: "/",
    element: <p>hey como andas</p>,
    errorElement:<p>Bad request of the user</p>
   
  },
  {
    path: "/login",
    element:<LoginComponent />,
    errorElement:<p>Bad request of the user</p>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
