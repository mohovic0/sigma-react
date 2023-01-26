import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PremierAcCours from './pages/PremierAcCours';
import Home from './pages/Home';
import DeuxiemeAcCours from './pages/DeuxiemeAcCours';
import TroixiemeAcCours from './pages/TroixiemeAcCours';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";





const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
    errorElement : <h1>ERROE 44</h1>
  },
  {
    path: "/PremierAcCours",
    element: <PremierAcCours />,

  },
  {
    path: "/DeuxiemeAcCours",
    element: <DeuxiemeAcCours />,

  },
  {
    path: "/TroixiemeAcCours",
    element: <TroixiemeAcCours />,

  }
 
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);



