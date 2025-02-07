import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ViewAllJobs = () => {
  return (
    <section className="my-16">
      <div className="max-w-2xl mx-auto px-6">
        <Link 
          to="/jobs" 
          className="group block bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transform transition duration-300 hover:scale-105 shadow-lg"
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-lg font-semibold">View All Jobs</span>
            <ArrowLongRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ViewAllJobs;