const { DataSource } = require("apollo-datasource");
const { CourseModel } = require("../model/course.model");

class CourseDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }
  create(input) {
    return CourseModel.create(input);
  }
  async findByTitle({title}) {
    const course = await CourseModel.findOne({ title }); 
    return course;
  }
  async deleteByTitle({title}) {
    const course = await CourseModel.findOneAndDelete({title}); 
    return course;
  }
  async updateByTitle({title,newTitle}) {
    const course = await CourseModel.findOneAndUpdate({title},{title:newTitle},{new:true}); 
    return course;
  }
}

module.exports.CourseDataSource = CourseDataSource;
