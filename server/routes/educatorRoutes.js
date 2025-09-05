import express from "express";
import {
  addCourse,
  educatorDashboardData,
  getEducatorCourses,
  getEnrolledStudentsData,
  updateRoleToEducator
} from "../controllers/educatorController.js";
import upload from "../configs/multer.js";
import { protectEducator } from "../middlewares/authMiddleware.js";

const educatorRouter = express.Router();

//add educator role
educatorRouter.get("/update-role", updateRoleToEducator); //route passed
educatorRouter.post(
  "/add-course",
  upload.single("image"),
  protectEducator,
  addCourse
); //route passed
educatorRouter.get("/courses", protectEducator, getEducatorCourses); //route passed
educatorRouter.get("/dashboard", protectEducator, educatorDashboardData); //route passed
educatorRouter.get(
  "/enrolled-students",
  protectEducator,
  getEnrolledStudentsData
); //route passed

export default educatorRouter;
