const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../../schema");

const graphql = express();
graphql.use(cors());

graphql.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  }));

module.exports.handler = serverless(graphql);