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

require('./connect')

const workoutRoutes=require('./routes/workouts') //Importe les routes spécifiques

// créer une instance d'express
const app=express()

// Définit un middleware global
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    })

//middleware qui permet à l'application de traiter automatiquement les données JSON provenant du corps des requêtes HTTP. Cela facilite la manipulation des données JSON dans votre application, en particulier lors de la réception de requêtes POST ou PUT avec des données JSON.    
app.use(express.json())

//Utilise le routeur workoutRoutes pour gérer les requêtes qui commencent par '/api/workouts'
app.use('/api/workouts',workoutRoutes)




//listen to requests
app.listen(3002,()=>{ //le serveur est en attente de demandes provenant de navigateurs web ou d'autres applications
    console.log('listening on port 3002 !!'); //votre serveur Express écoutera les connexions entrantes sur le port 3002
})