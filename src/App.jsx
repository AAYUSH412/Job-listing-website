import React from 'react';
import {BrowserRouter, Routes, Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './index.css' 
import Homepage from './pages/homepage';
import Mainlayout from './layout/mainlayout';
import Jobpage from './pages/jobpage';
import Notfound from './pages/notfound';
import Singlejobpage ,{jobloader} from './pages/singlejobpage';
import Addjob from './pages/addjob';
import EditJobPage from './pages/editjobpage';


const App = () => {
  // add new job
  const addJob = async(newjob) => {
    const res = await fetch(`/api/jobs`,{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(newjob)
    });
    return;
  }

  // delete job
  const deleteJob = async (id) =>{
    
      const res = await fetch(`/api/jobs/${id}`,{
        method:'DELETE'
      });
      return;
  }

  // update job
  const updatejob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }
  
  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Mainlayout />}>
      <Route index element={<Homepage/> }/>)
      <Route path='/jobs' element={<Jobpage/>} />
      <Route path='/add-job' element={<Addjob addjobsubmit={addJob}/>} />
      <Route path='/job/:id' element={<Singlejobpage deletejob={deleteJob}/>} 
      loader={jobloader}/>
      <Route path='/edit-job/:id' element={<EditJobPage updatejobsubmit={updatejob}/>} loader={jobloader}/>
      <Route path='*' element={<Notfound/>}/>

    </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
