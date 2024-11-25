import React from 'react';
import {BrowserRouter, Routes, Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './index.css' 
import Homepage from './pages/homepage';
import Mainlayout from './layout/mainlayout';
import Jobpage from './pages/jobpage';
import Notfound from './pages/notfound';

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout />}>
    <Route index element={<Homepage/> }/>)
    <Route path='/jobs' element={<Jobpage/>} />
    <Route path='*' element={<Notfound/>}/>
  </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
