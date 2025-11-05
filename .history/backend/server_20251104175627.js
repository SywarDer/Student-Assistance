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

//listen to requests
app.listen(3002,()=>{ //le serveur est en attente de demandes provenant de navigateurs web ou d'autres applications
    console.log('listening on port 3002 !!'); //votre serveur Express écoutera les connexions entrantes sur le port 3002
})