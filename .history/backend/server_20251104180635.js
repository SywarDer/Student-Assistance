import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

const express=require('express')


const app=express()


app.use(bodyParser.json());
app.use(cors());

// creates a new Apollo GraphQL Server instance.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function start() {
  await server.start();

  app.use("/graphql", expressMiddleware(server));

  // DB Connection
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to mongo"))
    .catch((err) => console.log(err));

  app.listen(process.e, () =>
    console.log("Server running")
  );
}

start();