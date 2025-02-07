import Joblist from '../components/joblist';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const JobPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <BriefcaseIcon className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Available Positions</h1>
          </div>
          <p className="text-center text-indigo-100 max-w-2xl mx-auto">
            Discover your next opportunity in React development. Browse through our curated list of positions from top companies.
          </p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-8">
        <Joblist />
      </div>
    </div>
  );
};

export default JobPage;