import { Link } from "react-router-dom";
import { 
  UserGroupIcon, 
  BuildingOfficeIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const HomeCards = () => {
  return (
    <section className="py-12">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <UserGroupIcon className="h-10 w-10 text-indigo-600" />
              <h2 className="text-2xl font-bold ml-4">For Developers</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-flex items-center bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors"
            >
              Browse Jobs
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <BuildingOfficeIcon className="h-10 w-10 text-indigo-600" />
              <h2 className="text-2xl font-bold ml-4">For Employers</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-flex items-center bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors"
            >
              Post a Job
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;