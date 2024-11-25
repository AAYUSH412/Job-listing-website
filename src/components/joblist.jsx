import React, { useState } from 'react';
import jobsData from '../jobtake.json';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
const JobList = () => {            
    const jobs = jobsData.jobs; // Accessing the jobs array
    const recentJobs = jobs.slice(0, 3); // Limiting to the first 3 jobs
    const [showFullDescription, setShowFullDescription] = useState(false); // State to toggle description length

    
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.isArray(jobs) && recentJobs.map((job) => {
                        // Determine the job description to display
                        let jobDescription = job.description;
                        if (!showFullDescription && jobDescription.length > 90) {
                            jobDescription = jobDescription.substring(0, 91) + "...";
                        }

                        return (
                            <div key={job.id} className="bg-white rounded-xl shadow-md relative">
                                <div className="p-4">
                                    <div className="mb-6">
                                        <div className="text-gray-600 my-2">{job.type}</div>
                                        <h3 className="text-xl font-bold">{job.title}</h3>
                                    </div>
                                    <div className="mb-1">
                                        {jobDescription}
                                        <button
                                            onClick={() => setShowFullDescription((prev) => !prev)}
                                            className="text-indigo-500 text-sm font-semibold mt-2"
                                        >
                                            {showFullDescription ? 'Less' : 'Read More'}
                                        </button>
                                    </div>
                                    
                                    <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
                                    <div className="border border-gray-100 mb-5"></div>
                                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                                        <div className="text-orange-700 ">
                                        <FaMapMarkerAlt />
                                        {job.location}
                                        </div>
                                        <a href={`/job/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default JobList;