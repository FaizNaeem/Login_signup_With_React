import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './com/Login'
import Signup from './com/signup';
import Dashboard from './com/dashboard';
import Navbar from './com/navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
 
  {
    path: "/navbar",
    element: <Navbar />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
