import { toast } from "react-hot-toast"
// import { setLoading } from "../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { jobEndpoints } from "../apis"

const {
  CREATE_JOB_API ,
  EDIT_JOB_API , 
  GET_ALL_JOBS_API ,
  DELETE_JOB_API , 
  GET_USER_JOB,
  // COURSE_DETAILS_API,
  // COURSE_CATEGORIES_API,
  // GET_ALL_COURSE_API,
  // CREATE_COURSE_API,
  // EDIT_COURSE_API,
  // GET_ALL_INSTRUCTOR_COURSES_API,
  // DELETE_COURSE_API,
  // GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  // CREATE_RATING_API,
  // LECTURE_COMPLETION_API,
} = jobEndpoints

export const getAlljobs = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_JOBS_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch job")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_JOB_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// export const fetchCourseDetails = async (courseId) => {
//   const toastId = toast.loading("Loading...")
//   //   dispatch(setLoading(true));
//   let result = null
//   try {
//     const response = await apiConnector("POST", COURSE_DETAILS_API, {
//       courseId,
//     })
//     console.log("COURSE_DETAILS_API API RESPONSE............", response)

//     if (!response.data.success) {
//       throw new Error(response.data.message)
//     }
//     result = response.data
//   } catch (error) {
//     console.log("COURSE_DETAILS_API API ERROR............", error)
//     result = error.response.data
//     // toast.error(error.response.data.message);
//   }
//   toast.dismiss(toastId)
//   //   dispatch(setLoading(false));
//   return result
// }

// add the job details
export const addJobDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_JOB_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE JOB API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Job Details")
    }
    toast.success("Job Posted Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE JOB API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
export const getuserjobs = async (token) => {
  let result = []
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_JOB,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("USER JOBS API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch user jobs")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("USER JOBS API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
// edit the job details
export const editjob = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_JOB_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT JOB API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Job Details")
    }
    toast.success("Job Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("EDIT JOB API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
// delete a job
export const deletejob = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_JOB_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE JOB API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Job")
    }
    toast.success("Job Deleted")
  } catch (error) {
    console.log("DELETE JOB API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}
