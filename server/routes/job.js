const express = require("express")
const router = express.Router()

const { auth, isjobposter } = require("../middlewares/auth")
const { createjob } = require("../Controllers/Jobpost")


router.post("/createjob",auth,isjobposter, createjob)



module.exports = router