const mongoose = require('mongoose');

const CourseOverviewSchema = new mongoose.Schema({
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  name: { type: String, required: true },
  courseDescription: { type: String, required: true },
  courseName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CourseOverview', CourseOverviewSchema);
