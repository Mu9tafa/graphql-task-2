const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { CourseDataSource } = require("./datasource/course");
const resolvers = require("./resolvers/index");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Mustafa:pass@cluster0.f7lrj.mongodb.net/DevCamper?retryWrites=true&w=majority"
);
const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "..", "schema.graphql"), "utf8")
);

const server = new ApolloServer({
  resolvers,
  typeDefs,
 
  dataSources: () => ({
    course: new CourseDataSource(),
  }),
});

server.listen(4000, () => {
  console.log("The server has been started on http://localhost:4000");
});
