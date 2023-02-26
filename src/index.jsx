import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
// creation du router 
import { createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flat",
    element: <h1>nos appartement</h1>
  },
  {
    path: "/about",
    element: <h1>A propos</h1>
  },
  {
    path: "/404",
    element: <h1>404 not fund</h1>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} /> 
  </React.StrictMode>
);


