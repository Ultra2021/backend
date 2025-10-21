const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Employee name is required'],
    trim: true
  },
  position: {
    type: String,
    required: [true, 'Employee position is required'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Employee department is required'],
    trim: true
  },
  salary: {
    type: Number,
    required: [true, 'Employee salary is required'],
    min: [0, 'Salary cannot be negative']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Employee', employeeSchema);