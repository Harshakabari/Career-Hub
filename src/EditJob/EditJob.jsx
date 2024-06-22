import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { EDIT_JOB_API } from "../operations/jobDetailsAPI.js"
import IconBtn from "../components/common/IconBtn"

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export default function EditJob() {
  const { user } = useSelector((state) => state.profile)
  const {job } = useSelector((state) => state.job)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitjobForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updatejob(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitjobForm)}>
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md bg-[#e7f3ff] bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Profile Information
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor=" companyName" className="lable-style">
              Company Name
              </label>
              <input
                type="text"
                name=" companyName"
                id="firstName"
                placeholder="Enter first name"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register(" companyName", { required: true })}
                defaultValue={job?.companyName}
              />
              {errors. companyName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your  companyName.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="lasjobTitletName" className="lable-style">
              Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Enter companyName"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("lastName", { required: true })}
                defaultValue={job?.jobTitle}
              />
              {errors.jobTitle && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Job Title.
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-[98%] font-semibold text-blue-900 ">
              <label htmlFor="companyDescription" className="lable-style">
                Company Description
              </label>
              <textarea
                type="text"
                name="companyDescription"
                id="companyDescription"
                placeholder="Enter Bio Details"
              className="form-style w-full !pr-10 h-80 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md resize-none"
                {...register("companyDescription", { required: true })}
                defaultValue={job?.companyDescription}
              />
              {errors.companyDescription && (
                <span className="-mt-1 text-[12px] text-red-600">
                  Please enter your Company Description.
                </span>
              )}
            </div>

          <div className="flex flex-col gap-5 lg:flex-row font-semibold text-blue-900">
          <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="lable-style">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-red-600">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%] font-semibold text-blue-900">
              <label htmlFor="gender" className="lable-style">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="form-style w-full !pr-10  py-1 px-2 rounded-md text-gray-600 outline-none shadow-md"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

        
            <div className="flex flex-col gap-2 lg:w-[98%] font-semibold text-blue-900 ">
              <label htmlFor="about" className="lable-style">
                About
              </label>
              <textarea
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
              className="form-style w-full !pr-10 h-80 py-1 px-2 rounded-md text-gray-600 outline-none shadow-md resize-none"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-red-600">
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
        
      

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
    </>
  )
}