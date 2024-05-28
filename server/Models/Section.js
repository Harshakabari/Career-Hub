const mongoose = require("mongoose");

// Define the Section schema
const sectionSchema = new mongoose.Schema({
    jobtitle:{
        type:string,
        required:true
    },
    jobdescription: {
		type: String,
        required:true
	},
	location:{
        type:String,
        required:true
    },
    role:{
        type:string,
        required:true
    },
    experiance:{
        type:string,
        required:true
    },
    applications:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    createdAt: { type: Date, default: Date.now },
});

// Export the Section model
module.exports = mongoose.model("Section", sectionSchema);
