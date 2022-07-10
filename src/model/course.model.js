const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  { title: String, description: String, weeks: String, minimumSkill: String },
  {
    timestamps: true,
  }
);

module.exports.CourseModel = mongoose.model("Course", CourseSchema);
