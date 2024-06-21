import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Searchbar from "../components/SearchBar/SearchBar";
import Logo1 from "../assets/clogo1.png";
import { SlLocationPin } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { getAlljobs } from "../operations/jobDetailsAPI";

const Label = ({ children, className }) => (
  <label className={className}>{children}</label>
);

const Checkbox = ({ checked, onCheckedChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
  />
);

const Card = ({ children, onClick }) => (
  <div
    className="bg-white text-black rounded-lg hover:shadow-lg hover:shadow-zinc-300 duration-700 border-gray-300 border-2 p-6 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

const CardFooter = ({ children }) => <div className="mt-4">{children}</div>;

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-blue-900 text-white px-4 py-2 rounded hover:scale-105 duration-200 ${className}`}
  >
    {children}
  </button>
);

const JobPost = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filters, setFilters] = useState({
    role: [],
    location: [],
    salary: [],
  });

  const [filterOptions, setFilterOptions] = useState({
    roles: [],
    locations: [],
    salaries: [],
  });

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null); // State for selected job details
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getAlljobs();
      if (result) {
        setJobs(result);

        const roles = [...new Set(result.map((job) => job.role))];
        const locations = [...new Set(result.map((job) => job.location.split(", ")[0]))];
        const salaries = [...new Set(result.map((job) => job.salary))];

        setFilterOptions({ roles, locations, salaries });
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const title = job.jobTitle ? job.jobTitle.toLowerCase() : '';
      const company = job.companyName ? job.companyName.toLowerCase() : '';
      const description = job.jobDescription ? job.jobDescription.toLowerCase() : '';
      const location = job.location ? job.location.toLowerCase() : '';

      const searchMatch =
        title.includes(searchQuery.toLowerCase()) ||
        company.includes(searchQuery.toLowerCase()) ||
        description.includes(searchQuery.toLowerCase());

      const locationMatch = location.includes(locationQuery.toLowerCase());

      const roleMatch = filters.role.length === 0 || filters.role.includes(job.role);

      const salaryMatch = filters.salary.length === 0 || filters.salary.includes(job.salary);

      const filterMatch =
        (filters.location.length === 0 || filters.location.includes(job.location.split(", ")[0]));

      return searchMatch && locationMatch && roleMatch && salaryMatch && filterMatch;
    });
  }, [searchQuery, locationQuery, filters, jobs]);

  const handleSearch = (title, location) => {
    setSearchQuery(title);
    setLocationQuery(location);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleViewMore = (job) => {
    setSelectedJob(job);
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <>
      <Header />
      <div className="px-24 py-8 text-black">
        <h3 className="font-bold text-4xl py-2 rounded-lg">
          Find your <span className="text-blue-900">NEW JOB</span> today
        </h3>
        <p className="text-gray-600 mb-8">
          Thousands of jobs in the computer, engineering, and technology sectors are waiting for you.
        </p>
        <Searchbar onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_300px] gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-gray-300 border-2">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Role</h3>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.role.includes("Full-time")}
                      onCheckedChange={() => handleFilterChange("role", "Full-time")}
                    />
                    Full-time
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.role.includes("Part-time")}
                      onCheckedChange={() => handleFilterChange("role", "Part-time")}
                    />
                    Part-time
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.role.includes("Contract")}
                      onCheckedChange={() => handleFilterChange("role", "Contract")}
                    />
                    Contract
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.role.includes("Internship")}
                      onCheckedChange={() => handleFilterChange("role", "Internship")}
                    />
                    Internship
                  </Label>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Location</h3>
                <div className="space-y-2">
                  {filterOptions.locations.map((location) => (
                    <Label className="flex items-center gap-2" key={location}>
                      <Checkbox
                        checked={filters.location.includes(location)}
                        onCheckedChange={() => handleFilterChange("location", location)}
                      />
                      {location}
                    </Label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Salary</h3>
                <div className="space-y-2">
                  {filterOptions.salaries.map((salary) => (
                    <Label className="flex items-center gap-2" key={salary}>
                      <Checkbox
                        checked={filters.salary.includes(salary)}
                        onCheckedChange={() => handleFilterChange("salary", salary)}
                      />
                      {salary}
                    </Label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-6">
              <p className="text-center mb-4 font-semibold text-gray-700">Total Jobs: {filteredJobs.length}</p>
              {currentJobs.length === 0 ? (
                <p className="text-center font-semibold text-gray-600">Data not found!</p>
              ) : (
                currentJobs.map((job) => (
                  <Card key={job.id} onClick={() => handleViewMore(job)}>
                    <div className="flex gap-2">
                      <img className="h-12" src={Logo1} alt="" />
                      <CardHeader>
                        <CardTitle>{job.jobTitle}</CardTitle>
                        <CardDescription>{job.companyName}</CardDescription>
                      </CardHeader>
                    </div>
                    <CardContent>
                      <div className="mb-4 flex gap-8 text-gray-900">
                        <p className="flex items-center gap-1">
                          <SlLocationPin className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.location}
                        </p>
                        <p className="flex items-center gap-1">
                          <IoTimeOutline className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.role}
                        </p>
                        <p className="flex items-center gap-1">
                          <RiMoneyRupeeCircleLine className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                          {job.salary}
                        </p>
                      </div>
                      <p className="mb-4">{job.jobDescription}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex gap-8">
                        <Button onClick={() => navigate(`/jobappllicationform/${job._id}`)}>
                          Apply
                        </Button>
                        <Button onClick={() => handleViewMore(job)}>
                          View More
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
            <div className="flex justify-center mt-8">
              <Button onClick={prevPage} className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""} disabled={currentPage === 1}>
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 ${currentPage === index + 1 ? "bg-blue-700" : "bg-blue-900"}`}
                >
                  {index + 1}
                </Button>
              ))}
              <Button onClick={nextPage} className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-gray-300 border-2">
            {selectedJob ? (
              <>
                <h2 className="text-lg font-bold mb-4">Job Details</h2>
                <div className="flex gap-2">
                  <img className="h-12" src={Logo1} alt="" />
                  <CardHeader>
                    <CardTitle>{selectedJob.jobTitle}</CardTitle>
                    <CardDescription>{selectedJob.companyName}</CardDescription>
                  </CardHeader>
                </div>
                <CardContent>
                  <div className="mb-4 flex gap-8 text-gray-900">
                    <p className="flex items-center gap-1">
                      <SlLocationPin className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                      {selectedJob.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <IoTimeOutline className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                      {selectedJob.role}
                    </p>
                    <p className="flex items-center gap-1">
                      <RiMoneyRupeeCircleLine className="text-blue-900 p-1.5 w-7 h-7 rounded-full bg-[#e7f3ff]" />
                      {selectedJob.salary}
                    </p>
                  </div>
                  <p className="mb-4">{selectedJob.jobDescription}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-8">
                    <Button onClick={() => navigate(`/jobappllicationform/${selectedJob._id}`)}>
                      Apply
                    </Button>
                    <Button>
                      <Link to={`/jobdetails/${selectedJob._id}`}>View More</Link>
                    </Button>
                  </div>
                </CardFooter>
              </>
            ) : (
              <p className="text-center font-semibold text-gray-600">Select a job to view details</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPost;
