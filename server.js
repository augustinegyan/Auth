require('dotenv').config();
const express = require('express');
const connectDb = require('./Databse/db');
const authRoutes = require('./routes/auth-routes');
const homeRoute = require('./routes/home-routes');


const app = express(); 

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoute);
connectDb();

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})