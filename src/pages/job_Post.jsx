import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Define the components directly within the same file for simplicity

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

const Input = ({ type, placeholder, value, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
  />
);

const Card = ({ children }) => (
  <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="mt-4">{children}</div>
);

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    {children}
  </button>
);

const JobPost = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    jobType: [],
    location: [],
    salaryRange: [],
  });

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Acme Inc",
      location: "New York, NY",
      description: "We are looking for an experienced frontend developer to join our team. You should have a strong background in React, JavaScript, and CSS.",
      jobType: "Full-time",
      salaryRange: "80k - 120k",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Globex Corporation",
      location: "San Francisco, CA",
      description: "Our growing team is in need of a skilled backend engineer to design and implement scalable and efficient server-side solutions.",
      jobType: "Full-time",
      salaryRange: "100k - 150k",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Stark Industries",
      location: "Seattle, WA",
      description: "We are seeking a talented UI/UX designer to join our product design team. You should have a strong portfolio and experience in user-centered design.",
      jobType: "Full-time",
      salaryRange: "70k - 100k",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Wayne Enterprises",
      location: "Chicago, IL",
      description: "Our data team is looking for a skilled data analyst to help us derive insights from complex datasets and drive data-driven decision making.",
      jobType: "Full-time",
      salaryRange: "60k - 90k",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "LexCorp",
      location: "Boston, MA",
      description: "We are seeking a DevOps engineer to join our infrastructure team and help us automate and streamline our deployment and operations processes.",
      jobType: "Full-time",
      salaryRange: "90k - 130k",
    },
    {
        id: 6,
        title: "Frontend Developer",
        company: "Acme Inc",
        location: "New York, NY",
        description: "We are looking for an experienced frontend developer to join our team. You should have a strong background in React, JavaScript, and CSS.",
        jobType: "Full-time",
        salaryRange: "80k - 120k",
      },
      {
        id: 7,
        title: "Backend Engineer",
        company: "Globex Corporation",
        location: "San Francisco, CA",
        description: "Our growing team is in need of a skilled backend engineer to design and implement scalable and efficient server-side solutions.",
        jobType: "Full-time",
        salaryRange: "100k - 150k",
      },
      {
        id: 8,
        title: "Frontend Developer",
        company: "Acme Inc",
        location: "New York, NY",
        description: "We are looking for an experienced frontend developer to join our team. You should have a strong background in React, JavaScript, and CSS.",
        jobType: "Full-time",
        salaryRange: "80k - 120k",
      },
      {
        id: 9,
        title: "Backend Engineer",
        company: "Globex Corporation",
        location: "San Francisco, CA",
        description: "Our growing team is in need of a skilled backend engineer to design and implement scalable and efficient server-side solutions.",
        jobType: "Full-time",
        salaryRange: "100k - 150k",
      },
      {
        id: 10,
        title: "Frontend Developer",
        company: "Acme Inc",
        location: "New York, NY",
        description: "We are looking for an experienced frontend developer to join our team. You should have a strong background in React, JavaScript, and CSS.",
        jobType: "Full-time",
        salaryRange: "80k - 120k",
      },
      {
        id: 11,
        title: "Backend Engineer",
        company: "Globex Corporation",
        location: "San Francisco, CA",
        description: "Our growing team is in need of a skilled backend engineer to design and implement scalable and efficient server-side solutions.",
        jobType: "Full-time",
        salaryRange: "100k - 150k",
      },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchMatch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const filterMatch =
        (filters.jobType.length === 0 || filters.jobType.includes(job.jobType)) &&
        (filters.location.length === 0 || filters.location.includes(job.location.split(", ")[0])) &&
        (filters.salaryRange.length === 0 || filters.salaryRange.includes(job.salaryRange));
      return searchMatch && filterMatch;
    });
  }, [searchQuery, filters]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  return (
    <>

    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 text-white">
    <h3 className="text-white bg-black text-center font-bold text-4xl py-2 mb-4 rounded-lg">Job Listing</h3>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Job Type</h3>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.jobType.includes("Full-time")}
                    onCheckedChange={() => handleFilterChange("jobType", "Full-time")}
                  />
                  Full-time
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.jobType.includes("Part-time")}
                    onCheckedChange={() => handleFilterChange("jobType", "Part-time")}
                  />
                  Part-time
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.jobType.includes("Contract")}
                    onCheckedChange={() => handleFilterChange("jobType", "Contract")}
                  />
                  Contract
                </Label>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Location</h3>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.location.includes("New York")}
                    onCheckedChange={() => handleFilterChange("location", "New York")}
                  />
                  New York
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.location.includes("San Francisco")}
                    onCheckedChange={() => handleFilterChange("location", "San Francisco")}
                  />
                  San Francisco
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.location.includes("Seattle")}
                    onCheckedChange={() => handleFilterChange("location", "Seattle")}
                  />
                  Seattle
                </Label>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Salary Range</h3>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.salaryRange.includes("60k - 90k")}
                    onCheckedChange={() => handleFilterChange("salaryRange", "60k - 90k")}
                  />
                  $60k - $90k
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.salaryRange.includes("80k - 120k")}
                    onCheckedChange={() => handleFilterChange("salaryRange", "80k - 120k")}
                  />
                  $80k - $120k
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.salaryRange.includes("100k - 150k")}
                    onCheckedChange={() => handleFilterChange("salaryRange", "100k - 150k")}
                  />
                  $100k - $150k
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full text-black border-black border-2 p-2 rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.location}</p>
                  <p className="mb-4">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button><Link to="/jobappllicationform">Apply</Link></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default JobPost;
