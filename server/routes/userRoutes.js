import express from "express";
import {
  addUserRating,
  getUserCourseProgress,
  getUserData,
  purchaseCourse,
  updateUserCourseProgress,
  userEnrolledCourses
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", getUserData); //route passed
userRouter.get("/enrolled-courses", userEnrolledCourses); //route passed
userRouter.post("/purchase", purchaseCourse); //route passes
userRouter.post("/update-course-progress", updateUserCourseProgress);
userRouter.post("/get-course-progress", getUserCourseProgress);
userRouter.post("/add-rating", addUserRating);

export default userRouter;
