const job = require("../Models/Jobpost")
const user = require("../Models/user")

// const { uploadImageToCloudinary } = require("../utils/imageUploader")
// const { convertSecondsToDuration } = require("../utils/secToDuration")

exports.createjob = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id
    // Get all required fields from request body
    let {
      companyName,
      companyDescription,
      jobTitle,
      jobDescription,
      location,
      role,
      experience,
      salary,
      skills
    } = req.body
    // Get thumbnail image from request files
    // const thumbnail = req.files.thumbnailImage

    // Convert the tag and instructions from stringified Array to Array
    // const tag = JSON.parse(_tag)
    // const instructions = JSON.parse(_instructions)

    // console.log("tag", tag)
    // console.log("instructions", instructions)

    // Check if any of the required fields are missing
    if (
      !companyName||
      !companyDescription||
      !jobTitle||
      !jobDescription||
      !location||
      !role||
      !experience||
      !salary||
      !skills
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      })
    }
    // Check if the user is an instructor
    const jobposterDetails = await user.findById(userId)

    if (!jobposterDetails) {
      return res.status(404).json({
        success: false,
        message: "Jobposter Details Not Found",
      })
    }

    // Check if the tag given is valid
    // const categoryDetails = await Category.findById(category)
    // if (!categoryDetails) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Category Details Not Found",
    //   })
    // }
    // Upload the Thumbnail to Cloudinary
    // const thumbnailImage = await uploadImageToCloudinary(
    //   thumbnail,
    //   process.env.FOLDER_NAME
    // )
    // console.log(thumbnailImage)
    // Create a new course with the given details
    const newJob = await job.create({
      jobadmin: jobposterDetails._id,
      companyName,
      companyDescription,
      jobTitle,
      jobDescription,
      location,
      role,
      experience,
      salary,
      skills
    })

    // Add the new course to the User Schema of the Instructor
    await user.findByIdAndUpdate(
      {
        _id: jobposterDetails._id,
      },
      {
        $push: {
          jobs: newJob._id,
        },
      },
      { new: true }
    )
    res.status(200).json({
      success: true,
      data: newJob,
      message: "job posted  Successfully",
    })
  } catch (error) {
    // Handle any errors that occur during the creation of the course
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create job",
      error: error.message,
    })
  }
}

exports.editjob = async (req, res) => {
  try {
    const { jobid } = req.body
    const updates = req.body
    const jobpost = await job.findById(jobid)

    if (!jobpost) {
      return res.status(404).json({ error: "job not found" })
    }

    // // If Thumbnail Image is found, update it
    // if (req.files) {
    //   console.log("thumbnail update")
    //   const thumbnail = req.files.thumbnailImage
    //   const thumbnailImage = await uploadImageToCloudinary(
    //     thumbnail,
    //     process.env.FOLDER_NAME
    //   )
    //   course.thumbnail = thumbnailImage.secure_url
    // }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        {
          jobpost[key] = updates[key]
        }
      }
    }

    await jobpost.save()

    const updatedjob = await job.findOne({
      _id: jobid,
    })
      .populate("jobadmin")
      .exec()

    res.json({
      success: true,
      message: "job updated successfully",
      data: updatedjob,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

exports.getAlljobs = async (req, res) => {
  try {
    const alljobs = await job.find()
      .populate('jobadmin') 
      .exec();

    return res.status(200).json({
      success: true,
      data: alljobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `Can't Fetch job Data`,
      error: error.message,
    });
  }
};

exports.deletejob = async (req, res) => {
  try {
    const { jobid } = req.body  

 

    // Find the course
    const jobpost = await job.findById(jobid)
    if (!jobpost) {
      return res.status(404).json({ message: "job not found" })
    }

    const userdata = await user.findOne({ jobs: jobid });
    if (userdata) {
      // Check if the jobs field exists and is an array
      if (Array.isArray(userdata.jobs)) {
        // Remove the job from the user's jobs array
        userdata.jobs = userdata.jobs.filter(id => id.toString() !== jobid);
        await userdata.save();
      } else {
        // Initialize the jobs array if it doesn't exist
        userdata.jobs = [];
      }
    }


    await job.findByIdAndDelete(jobid)


    return res.status(200).json({
      success: true,
      message: "job deleted successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
};

exports.getuserjobs = async (req, res) => {
  try {
    // Get the job poster ID from the authenticated user
    const jobposterid = req.user.id;

    // Find all jobs belonging to the job poster
    const jobs = await job.find({
      jobadmin: jobposterid, // Ensure this field matches the schema
    }).sort({ createdAt: -1 });

    // Return the job poster's jobs
    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user jobs",
      error: error.message,
    });
  }
};

