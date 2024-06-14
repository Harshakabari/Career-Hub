const mongoose = require("mongoose");
const { TbArrowUp } = require("react-icons/tb");

// Define the Section schema
const sectionSchema = new mongoose.Schema({

    companyName:{
        type:String,
        required:true
    },
    companyDescription:{
        type:String,
    },
    jobTitle:{
        type:String,
        required:true
    },
  
    jobDescription: {
		type: String,
        required:true
	},
	location:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
        // category: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: "Category",
        // },
    createdAt: { type: Date, default: Date.now },
});

// Export the Section model
module.exports = mongoose.model("jobpost", sectionSchema);
