import React from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  BriefcaseIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  TrashIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';

const SingleJobPage = ({ deletejob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  if (!job) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  const onDeleteClick = async (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;

    try {
      await deletejob(jobId);
      toast.success("Job Deleted Successfully");
      navigate("/jobs");
    } catch (error) {
      toast.error("Failed to delete job");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <Link
            to="/jobs"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            <span>Back to Job Listings</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <BriefcaseIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-indigo-600">{job.type}</span>
                  <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>{job.location}</span>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-600 whitespace-pre-wrap mb-6">{job.description}</p>
              
              <div className="flex items-center space-x-2 text-gray-800">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
                <span className="font-medium text-lg">{job.salary}</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BuildingOfficeIcon className="h-6 w-6 text-indigo-600" />
                <h2 className="text-xl font-semibold">Company Info</h2>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-lg">{job.company.name}</h3>
                <p className="text-gray-600">{job.company.description}</p>
                
                <div className="pt-4 border-t">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <EnvelopeIcon className="h-5 w-5" />
                      <span>{job.company.contactEmail}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <PhoneIcon className="h-5 w-5" />
                      <span>{job.company.contactPhone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Manage Job</h2>
              <div className="space-y-3">
                <Link
                  to={`/edit-job/${job._id}`}
                  className="flex items-center justify-center space-x-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <PencilSquareIcon className="h-5 w-5" />
                  <span>Edit Job</span>
                </Link>
                <button
                  onClick={() => onDeleteClick(job._id)}
                  className="flex items-center justify-center space-x-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                  <span>Delete Job</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleJobPage.propTypes = {
  deletejob: PropTypes.func.isRequired
};

const jobloader = async ({ params }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${params.id}`);
    if (!response.ok) {
      throw new Error('Job not found');
    }
    const job = await response.json();
    return {
      ...job,
      id: job._id // Ensure we have the id mapped from MongoDB's _id
    };
  } catch (error) {
    console.error('Error loading job:', error);
    throw new Error('Failed to load job');
  }
};

export { SingleJobPage as default, jobloader };