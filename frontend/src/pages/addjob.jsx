import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";

const AddJob = ({addjobsubmit}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [company_description, setCompany_description] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [type, setType] = useState("Full-Time");
  const [salary, setSalary] = useState("Under $50K");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const newjob = {
        title,
        type,
        location,
        description,
        salary,
        company: {
          name: company,
          description: company_description,
          contactEmail: contact_email,
          contactPhone: contact_phone
        }
      };
      await addjobsubmit(newjob);
      toast.success("Job Added Successfully");
      navigate("/jobs");
    } catch (error) {
      console.error("Error adding job:", error);
      toast.error("Failed to add job");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Navigation */}
        <Link
          to="/jobs"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          <span>Back to Jobs</span>
        </Link>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-indigo-100 p-3 rounded-full">
              <BriefcaseIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 ml-4">Post a New Job</h2>
          </div>

          <form onSubmit={submitForm} className="space-y-6">
            {/* Job Details Section */}
            <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <DocumentTextIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Job Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <select
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g. Senior React Developer"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g. San Francisco, CA"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                    placeholder="Describe the role, requirements, and responsibilities"
                  />
                </div>
              </div>
            </div>

            {/* Company Information Section */}
            <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <BuildingOfficeIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Company Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Description
                  </label>
                  <textarea
                    value={company_description}
                    onChange={(e) => setCompany_description(e.target.value)}
                    rows="3"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3" />
                    <input
                      type="email"
                      value={contact_email}
                      onChange={(e) => setContact_email(e.target.value)}
                      className="w-full pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3" />
                    <input
                      type="tel"
                      value={contact_phone}
                      onChange={(e) => setContact_phone(e.target.value)}
                      className="w-full pl-10 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <BriefcaseIcon className="h-5 w-5 mr-2" />
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddJob.propTypes = {
  addjobsubmit: PropTypes.func.isRequired
};

export default AddJob;