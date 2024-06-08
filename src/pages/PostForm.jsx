import React from "react";

const PostForm = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-2xl text-black bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Post a New Job Listing</h2>
          <p className="text-gray-600">
            Fill out the form below to create a new job posting.
          </p>
        </div>
        <div className="p-6 border-t border-gray-200">
          <form className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  id="company-name"
                  type="text"
                  placeholder="Acme Inc"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company-description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Description
                </label>
                <textarea
                  id="company-description"
                  placeholder="Describe your company"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <input
                  id="job-title"
                  type="text"
                  placeholder="Software Engineer"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="job-description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Description
                </label>
                <textarea
                  id="job-description"
                  placeholder="Describe the job responsibilities"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="San Francisco, CA"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select role
                  </option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experience
                </label>
                <select
                  id="experience"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select experience level
                  </option>
                  <option value="entry-level">Entry-Level</option>
                  <option value="mid-level">Mid-Level</option>
                  <option value="senior-level">Senior-Level</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium text-gray-700"
                >
                  Salary
                </label>
                <input
                  id="salary"
                  type="number"
                  placeholder="$50,000 - $80,000"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700"
              >
                Skills
              </label>
              <textarea
                id="skills"
                placeholder="List the required skills"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="created-at"
                className="block text-sm font-medium text-gray-700"
              >
                Created At
              </label>
              <input
                id="created-at"
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
