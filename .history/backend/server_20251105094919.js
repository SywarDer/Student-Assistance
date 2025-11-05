import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import gql from "graphql-tag";
import resolvers from "./src/resolvers.js";
import { readFileSync } from "fs";

const PORT = 5050;

const app = express();

app.listen(PORT, () => {
  console.log(`GraphQL Server running at http://localhost:${PORT}/graphql`);
});
