import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomForm from "../components/CustomForm/Customform";  // Adjust the path as needed

const formSchema = z.object({
  companyName: z.string().min(1, {
    message: "Company name is required.",
  }),
  companyDescription: z.string().min(1, {
    message: "Company description is required.",
  }),
  jobTitle: z.string().min(1, {
    message: "Job title is required.",
  }),
  jobDescription: z.string().min(1, {
    message: "Job description is required.",
  }),
  location: z.string().min(1, {
    message: "Location is required.",
  }),
  role: z.string({
    required_error: "Role is required.",
  }),
  experience: z.string({
    required_error: "Experience level is required.",
  }),
  salary: z.string().transform((value) => Number(value)).refine((value) => !isNaN(value) && value >= 0, {
    message: "Salary must be a positive number.",
  }),
  skills: z.string().min(1, {
    message: "Skills are required.",
  }),
  createdAt: z.string().min(1, {
    message: "Created date is required.",
  }),
});

const fields = [
  {
    name: "companyName",
    label: "Company Name",
    placeholder: "Acme Inc",
    input: "input",
  },
  {
    name: "companyDescription",
    label: "Company Description",
    placeholder: "Describe your company",
    input: "textarea",
  },
  {
    name: "jobTitle",
    label: "Job Title",
    placeholder: "Software Engineer",
    input: "input",
  },
  {
    name: "jobDescription",
    label: "Job Description",
    placeholder: "Describe the job responsibilities",
    input: "textarea",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "San Francisco, CA",
    input: "input",
  },
  {
    name: "role",
    label: "Role",
    placeholder: "Select role",
    options: [
      { value: "full-time", text: "Full-Time" },
      { value: "part-time", text: "Part-Time" },
      { value: "contract", text: "Contract" },
      { value: "internship", text: "Internship" },
    ],
    input: "select",
  },
  {
    name: "experience",
    label: "Experience",
    placeholder: "Select experience level",
    options: [
      { value: "entry-level", text: "Entry-Level" },
      { value: "mid-level", text: "Mid-Level" },
      { value: "senior-level", text: "Senior-Level" },
    ],
    input: "select",
  },
  {
    name: "salary",
    type: "number",
    label: "Salary",
    placeholder: "$50,000 - $80,000",
    input: "input",
  },
  {
    name: "skills",
    label: "Skills",
    placeholder: "List the required skills",
    input: "textarea",
  },
  {
    name: "createdAt",
    type: "date",
    label: "Created At",
    input: "input",
  },
];

const Page = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyDescription: "",
      jobTitle: "",
      jobDescription: "",
      location: "",
      role: "",
      experience: "",
      salary: "",
      skills: "",
      createdAt: "",
    },
    mode: "all",
  });

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2)); // Logging form data to console
    methods.reset(); // Resetting the form after submission
  };

  return (
    <FormProvider {...methods}>
      <CustomForm form={methods} fields={fields} onSubmit={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default Page;
