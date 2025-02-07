import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const JobListComponent = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const jobDescription = isExpanded
    ? job.description
    : job.description.length > 90
    ? `${job.description.substring(0, 90)}...`
    : job.description;

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className="mb-5">
          <p>{jobDescription}</p>
          {job.description.length > 90 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-500 text-sm font-semibold mt-2"
            >
              {isExpanded ? 'Less' : 'Read More'}
            </button>
          )}
        </div>
        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <div className="text-orange-700 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {job.location}
          </div>
          <Link
            to={`/job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            View Job
          </Link>
        </div>
      </div>
    </div>
  );
};

JobListComponent.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired
};

export default JobListComponent;