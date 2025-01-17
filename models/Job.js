const mongoose = require("mongoose");
const companyschema = new mongoose.Schema({

    ttile: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    


});
module.exports = mongoose.model("Job", jobschema, "job");
