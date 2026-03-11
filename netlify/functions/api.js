// const express = require("express");
// const cors = require("cors");
// const path = require("path");
import express from "express";
import cors from "cors";
import serverless from "serverless-http";
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const api = express();

// const app = express();
api.use(cors());

api.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5001;
api.listen(PORT, () => console.log(`Server started on ${PORT}`));

export const handler = serverless(api);