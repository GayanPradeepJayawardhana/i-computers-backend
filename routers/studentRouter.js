import express from "express"
import Student from "../models/student.js";
import { getAllStudents } from "../controllers/studentController.js";
import { creeateStudent } from "../controllers/studentController.js";
const studentRouter = express.Router();

studentRouter.get("/",getAllStudents)

studentRouter.post("/",creeateStudent)

export default studentRouter