import { useParams,useLoaderData ,useNavigate } from 'react-router-dom';
import { FaArrowLeft,FaMapMarker } from 'react-icons/fa';
import{Link} from 'react-router-dom';
import {toast} from "react-toastify";


const SingleJobPage = ({deletejob}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();
  
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");

    if (!confirm)return;

    deletejob(jobId);
    toast.success("Job Deleted Successfully");
    navigate("/jobs");
  }
 
  return (
    <>
    <section>
  <div className="container mx-auto py-6 px-6">
    <Link
      to="/jobs"
      className="text-indigo-500 hover:text-indigo-600 flex items-center"
    >
      <FaArrowLeft className="mr-2" /> Back to Job Listings
    </Link>
  </div>
</section>

<section className="bg-indigo-50">
  <div className="container mx-auto py-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-70/30 gap-6">
      {/* Main Content */}
      <main>
        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
          <p className="text-gray-500 mb-4">{job.type}</p>
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <div className="flex items-center justify-center md:justify-start text-orange-700 mb-4">
            <FaMapMarker className="mr-1" />
            <span>{job.location}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-indigo-800 text-lg font-bold mb-6">
            Job Description
          </h3>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
          <p className="text-gray-700">{job.salary}</p>
        </div>
      </main>

      {/* Sidebar */}
      <aside>
        {/* Company Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6">Company Info</h3>
          <p className="text-2xl text-gray-700 mb-4">
            {job.company.description}
          </p>
          <hr className="my-4" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Contact Email:</h3>
            <p className="bg-indigo-100 p-2 font-bold text-indigo-600 mt-2">
              {job.company.contact_email}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Phone:</h3>
            <p className="bg-indigo-100 p-2 font-bold text-indigo-600 mt-2">
              {job.company.contact_phone}
            </p>
          </div>
        </div>

        {/* Manage Job */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold mb-6">Manage Job</h3>
          <Link
            to={`/edit-job/${job.id}`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block mt-4"
          >
            Edit Job
          </Link>
          <button onClick={()=> onDeleteClick(job.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4 block"
          >
            Delete Job
          </button>
        </div>
      </aside>
    </div>
  </div>
</section>


    </>
  );
};


const jobloader =async ({params}) => {
  const res= await fetch(`/api/jobs/${params.id}`);
  const data =await res.json();
  return data;
}

export { SingleJobPage as default, jobloader };