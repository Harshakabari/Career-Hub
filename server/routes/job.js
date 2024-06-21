const express = require("express")
const router = express.Router()

const { auth, isRecruiter } = require("../middlewares/auth")
const { createjob ,editjob , getAlljobs , deletejob , getuserjobs} = require("../Controllers/Jobpost")

router.post("/createjob",auth,isRecruiter, createjob)
router.put("/editjob",auth,isRecruiter, editjob)
router.get("/getAlljobs", getAlljobs)
router.delete("/deletejob",auth,isRecruiter, deletejob)
router.get("/getuserjobs",auth, getuserjobs)







module.exports = router