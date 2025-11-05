import express from 'express';
import cors from 'cors';


//highlight-start
import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import resolvers from "./src/resolvers.js";
import { expressMiddleware } from '@apollo/server/express4';

import { readFileSync } from "fs";
//highlight-end

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

//highlight-start
const typeDefs = gql(
    readFileSync("schema.graphql", {
      encoding: "utf-8",
    })
  );

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

app.use("/record", records);
// Specify the path to mount the server
//highlight-start
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server),
);
//highlight-end

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();
//highlight-end


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});