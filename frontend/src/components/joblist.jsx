import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, FunnelIcon } from '@heroicons/react/24/outline';
import JobListComponent from './joblistcomponenet';
import Spinner from './spinner';
import { jobService } from '../services/api';
import PropTypes from 'prop-types';

const JobLists = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await jobService.getJobs(isHome ? 3 : null);
        const transformedJobs = (data.jobs || data)
          .map(job => ({
            ...job,
            id: job._id || job.id
          }))
          .slice(0, isHome ? 3 : undefined);
        
        setJobs(transformedJobs);
      } catch (error) {
        setError('Failed to fetch jobs. Please try again later.');
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.type === filter);

  return (
    <div className="space-y-8">
      {!isHome && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <FunnelIcon className="h-5 w-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'Full-Time', 'Part-Time', 'Remote', 'Internship'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${filter === type 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {type === 'all' ? 'All Jobs' : type}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center">
            <Spinner loading={loading} />
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="bg-yellow-50 text-yellow-600 p-8 rounded-lg text-center">
            <p className="text-lg font-medium">No jobs found</p>
            <p className="text-sm mt-2">Try adjusting your filters or check back later</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobListComponent 
                  key={job._id || job.id} 
                  job={job} 
                />
              ))}
            </div>

            {isHome && jobs.length > 0 && (
              <div className="flex justify-center mt-8">
                <Link
                  to="/jobs"
                  className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <span>View All Jobs</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {!isHome && !loading && filteredJobs.length > 0 && (
        <div className="text-center text-gray-600 mt-4">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
        </div>
      )}
    </div>
  );
};

JobLists.propTypes = {
  isHome: PropTypes.bool
};

export default JobLists;