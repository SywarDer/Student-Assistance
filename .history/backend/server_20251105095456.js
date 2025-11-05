import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import gql from "graphql-tag";
import resolvers from "./src/resolvers.js";
import { readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createHandler } from "graphql-http/lib/use/express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env., () => {
  console.log(`GraphQL Server running at http://localhost:${PORT}/graphql`);
});
