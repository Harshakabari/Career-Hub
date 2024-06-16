import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
// import cartReducer from "../slices/cartSlice"
import jobReducer from "../slices/jobSlice"
import profileReducer from "../slices/profileSlice"
// import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  job: jobReducer,
  // cart: cartReducer,
  // viewCourse: viewCourseReducer,
})

export default rootReducer
