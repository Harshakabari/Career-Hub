const express = require("express")
const router = express.Router()

const { auth } = require("../middlewares/auth")
const { createjob ,editjob , getAlljobs , deletejob , getuserjobs} = require("../Controllers/Jobpost")


router.post("/createjob",auth, createjob)
router.put("/editjob",auth, editjob)
router.get("/getAlljobs", getAlljobs)
router.delete("/deletejob",auth, deletejob)
router.get("/getuserjobs",auth, getuserjobs)







module.exports = router