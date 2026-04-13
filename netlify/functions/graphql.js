const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../../schema");

const graphql = express();
graphql.use(cors());
graphql.use(express.json());
graphql.use(express.urlencoded({ extended: true }));

graphql.use("/", graphqlHTTP({
    schema,
    graphiql: true,
  }));

module.exports.handler = serverless(graphql);