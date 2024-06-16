import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getuserjobs } from "../operations/jobDetailsAPI"
import IconBtn from "../components/common/IconBtn"
// import CoursesTable from "./InstructorCourses/CoursesTable"

export default function Myjobs() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getuserjobs(token)
      if (result) {
        setJobs(result)
      }
    }
    fetchJobs()
  }, [])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {jobs && <jobTable jobs={jobs} setJobs={setJobs} />}
    </div>
  )
}
