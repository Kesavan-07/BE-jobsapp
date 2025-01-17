const express = require("express");
const recruiterController = require("../Controllers/recruiterController");

const recruiterRouter = express.Router();

recruiterRouter.post("/createJob", recruiterController.createJob);
recruiterRouter.get("/viewJobs", recruiterController.ViewJobs);
recruiterRouter.put("/updateJob", recruiterController.UpdateJob);
recruiterRouter.delete("/deleteJob", recruiterController.DeleteJob);
recruiterRouter.get("/applications", recruiterController.ViewApplicants);
recruiterRouter.get("/applications/:id", recruiterController.ViewCandidateProfile);

module.exports = recruiterRouter;