const express = require("express")
const router = express.Router()

const { auth } = require("../middlewares/auth")
const { createjob } = require("../Controllers/Jobpost")


router.post("/createjob",auth, createjob)



module.exports = router