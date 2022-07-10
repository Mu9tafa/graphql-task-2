const Query = {
  
  getCourse: async (_, args, context) => {
    return context.dataSources.course.findByTitle({title:args.title});
  },
  
};
module.exports.Query = Query;
