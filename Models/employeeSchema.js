import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  employeeFirstName: String,
  employeeLastName: String,
  employeeEmail: String,
  employeeDesignation: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
