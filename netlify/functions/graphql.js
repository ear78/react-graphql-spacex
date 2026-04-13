import express from "express";
const cors = require("cors");
import serverless from "serverless-http";
const { graphqlHTTP } = require("express-graphql");
const schema = require("../../schema");

const graphql = express();
graphql.use(cors());

graphql.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  }));

export const handler = serverless(graphql);