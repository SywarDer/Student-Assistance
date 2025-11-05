import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import gql from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";
import resolvers from "./resolvers.js";
import { readFileSync } from "fs";

const PORT = process.env.PORT || 5050;

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const typeDefs = gql(
    readFileSync("schema.graphql", {
      encoding: "utf-8",
    })
  );

  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  await server.start();

  // ✅ This replaces expressMiddleware
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
