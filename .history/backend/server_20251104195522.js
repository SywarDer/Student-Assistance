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

const typeDefs = gql(readFileSync("./schema.graphql", "utf-8"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressMiddleware(server)
);

app.listen(PORT, () => {
  console.log(`🚀 GraphQL Server running at http://localhost:${PORT}/graphql`);
});
//// mochkla apperement l express may7ebbch y5dem m3a graphql