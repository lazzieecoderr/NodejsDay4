import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployee,
} from "../Controllers/employeeController.js";

const router = express.Router();

router.post("/createemployee", createEmployee);
router.get("/getallemployee", getEmployee);
router.get("/getemployee/:id", getEmployeeById);
router.put("/updateemployee/:id", updateEmployee);
router.delete("/deleteemployee/:id",deleteEmployee);

export default router;
