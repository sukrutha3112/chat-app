// const express = require('express');
// const dotenv = require('dotenv')

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hello");
});
// app.get('/api/auth/signup',(req,res)=>{
//     res.send("hello")
// })
// app.get('/api/auth/login',(req,res)=>{
//     res.send("hello")
// })
// app.get('/api/auth/logout',(req,res)=>{
//     res.send("hello")
// })
app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`Server at ${PORT}`));
