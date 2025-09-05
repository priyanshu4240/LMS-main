import express from "express";
import { getAllCourse, getCourseId } from "../controllers/courseController.js";

const courseRouter = express.Router();

courseRouter.get("/all", getAllCourse); //route passed
courseRouter.get("/:id", getCourseId); //route passed

export default courseRouter;
