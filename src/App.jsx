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

const API_URL = import.meta.env.VITE_API_URL;

// API Helper Functions
const handleApiResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'API request failed');
  }
  return response.json();
};

const makeApiRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return await handleApiResponse(response);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const App = () => {
  // Add new job
  const addJob = async (newjob) => {
    return makeApiRequest(`${API_URL}/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newjob)
    });
  };

  // Delete job
  const deleteJob = async (id) => {
    return makeApiRequest(`${API_URL}/api/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json'
      }
    });
  };

  // Update job
  const updateJob = async (job) => {
    return makeApiRequest(`${API_URL}/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
        <Route 
          path="add-job" 
          element={<Addjob addjobsubmit={addJob} />} 
        />
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