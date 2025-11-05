import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import gql from "graphql-tag";
import resolvers from "./src/resolvers.js";
import { readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createHandler } from "graphql-http/lib/use/express";
import dotenv from "dotenv";
import { ruruHTML } from "ruru/server";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. Load schema.graphql
const typeDefs = readFileSync("./schema.graphql", "utf8");

// 2. Build executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// to add UI for graphql
app.get("/graphql", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// 3. Mount GraphQL endpoint
app.use(
  "/graphql",
  createHandler({
    schema,
    context: async (req) => {
      return {
        user: {
          id: "default-user-001",
          fullName: "Default User",
          email: "default@example.com",
        },
      };
    },
  })
);



app.listen(process.env.PORT, () => {
  console.log(`GraphQL Server running at http://localhost:${process.env.PORT}/graphql`);
});
