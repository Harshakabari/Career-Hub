const express = require("express")
const router = express.Router()

const { auth, isjobposter } = require("../middlewares/auth")
const { createCategory } = require("../Controllers/Category")


router.post("/createCategory",auth,isjobposter, createCategory)



module.exports = router