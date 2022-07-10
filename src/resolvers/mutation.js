
const Mutation = {
  addCourse: async (_, args, { dataSources: { course } }) => {  
    const createdCourse = await course.create(args);
    return createdCourse;
  },
  deleteCourseByTitle: async (_, args, { dataSources: { course } }) => {  
    const deletedCourse = await course.deleteByTitle({title:args.title});
    return deletedCourse;
  },

  updateCourseByTitle: async (_, args, { dataSources: { course } }) => {  
    const updatedCourse = await course.updateByTitle(args);
    return updatedCourse;
  }
};
module.exports.Mutation = Mutation;
