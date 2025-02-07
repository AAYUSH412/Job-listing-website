import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';

// Page Components
import Homepage from './pages/homepage';
import Mainlayout from './layout/mainlayout';
import Jobpage from './pages/jobpage';
import Notfound from './pages/notfound';
import Singlejobpage, { jobloader } from './pages/singlejobpage';
import Addjob from './pages/addjob';
import EditJobPage from './pages/editjobpage';

// API Configuration
const API_URL = import.meta.env.VITE_API_URL;

// API Helper Functions
const makeApiRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'API request failed');
    }
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const App = () => {
  // API Operations
  const addJob = async (newjob) => {
    return makeApiRequest(`${API_URL}/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newjob)
    });
  };

  const deleteJob = async (id) => {
    return makeApiRequest(`${API_URL}/api/jobs/${id}`, {
      method: 'DELETE'
    });
  };

  const updateJob = async (job) => {
    return makeApiRequest(`${API_URL}/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    });
  };

  // Router Configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="jobs" element={<Jobpage />} />
        <Route path="add-job" element={<Addjob addjobsubmit={addJob} />} />
        <Route 
          path="job/:id" 
          element={<Singlejobpage deletejob={deleteJob} />}
          loader={jobloader}
          errorElement={<Notfound />}
        />
        <Route 
          path="edit-job/:id" 
          element={<EditJobPage updatejobsubmit={updateJob} />}
          loader={jobloader}
          errorElement={<Notfound />}
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;