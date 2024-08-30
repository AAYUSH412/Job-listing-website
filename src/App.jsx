import React from 'react';
import {BrowserRouter, Routes, Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './index.css' 
import Homepage from './pages/homepage';
import Mainlayout from './layout/mainlayout';

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout />}>
    <Route index element={<Homepage/> }/>)
  </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
