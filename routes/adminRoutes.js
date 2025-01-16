const express = require("express");
const adminController = require("../Controllers/adminController");
const auth = require("../middleware/auth");
const adminRouter = express.Router();

//manage recruiters
adminRouter.post("/recruiters", auth.checkauth, auth.allowRoles(["admin"]), adminController.createRecruiter);
adminRouter.put("/recruiters/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.updateRecruiter);
adminRouter.delete("/recruiters/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.deleteRecruiter);

//manage companies
adminRouter.post("/companies", auth.checkauth, auth.allowRoles(["admin"]), adminController.createCompany);
adminRouter.put("/companies/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.updateCompany);
adminRouter.delete("/companies/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.deleteCompany);

//assign and remove recruiter from company
adminRouter.put("/companies/:companyId/assign-recruiters/:recruiterId", auth.checkauth, auth.allowRoles(["admin"]), adminController.assignRecruiter);
adminRouter.put("/companies/:companyId/remove-recruiters/:recruiterId", auth.checkauth, auth.allowRoles(["admin"]), adminController.removeRecruiter);

//manage jobs
adminRouter.post("/jobs", auth.checkauth, auth.allowRoles(["admin"]), adminController.createJob);
adminRouter.put("/jobs/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.updateJob);
adminRouter.delete("/jobs/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.deleteJob);
adminRouter.get("/jobs", auth.checkauth, auth.allowRoles(["admin"]), adminController.viewAllJobs);

//manage users
adminRouter.get("/users", auth.checkauth, auth.allowRoles(["admin"]), adminController.viewAllUsers);
adminRouter.delete("/users/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.deleteUser);
adminRouter.put("/users/:id", auth.checkauth, auth.allowRoles(["admin"]), adminController.updateUser);


module.exports = adminRouter;

