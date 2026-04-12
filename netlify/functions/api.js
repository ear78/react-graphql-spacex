import express, {Router} from "express";
import serverless from "serverless-http";
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const api = express();
const router = Router();

router.get("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  }));

api.use("/api/", router);

export const handler = serverless(api);