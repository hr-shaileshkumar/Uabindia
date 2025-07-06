import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String },
  department: { type: String },
  dateOfJoining: { type: Date },
  salary: { type: Number },
  phone: { type: String },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;