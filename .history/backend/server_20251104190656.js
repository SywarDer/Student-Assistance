import express from 'express';
import cors from 'cors';
import records from "./routes/record.js";

//highlight-start
import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@as-integrations/express5';
import resolvers from "./resolvers.js";
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
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();
//highlight-end

app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});