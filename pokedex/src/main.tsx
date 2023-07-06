import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home';
import List from './layouts/list';
import PokemonDetail from './pages/pokemonDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<p>Bad request of the user</p>
   
  },
  {
    path: "/pokemon",
    element:<List />,
    children:[{
      path:'/pokemon/:name',
      element:<PokemonDetail />

    }
      
    ]
    
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
