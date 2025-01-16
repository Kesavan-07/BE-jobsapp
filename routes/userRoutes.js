const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.get("/profile", auth.checkauth, auth.allowRoles(['user', 'recruiter', 'admin']), userController.getProfile);
userRouter.put("/profile", auth.checkauth, auth.allowRoles(['user']), userController.updateProfile);
userRouter.delete("/profile", auth.checkauth, auth.allowRoles(['user']), userController.deleteProfile);
userRouter.post("/apply/:jobId", auth.checkauth, auth.allowRoles(['user']), userController.applyJob);
userRouter.get("/applications", auth.checkauth, auth.allowRoles(['user']), userController.myApplications);


module.exports = userRouter;
