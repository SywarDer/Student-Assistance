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



// créer une instance d'express
const app=express()

// Définit un middleware global
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    })

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
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log(err));

  app.listen(4000, () =>
    console.log("🚀 Server running at http://localhost:4000/graphql")
  );
}

start();