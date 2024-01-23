const express = require('express')
const app=express();
const bodyParser=require('body-parser')
const bcrypt = require("bcrypt")
require("./models/mongoDBconnection.js").connectDB();
require("dotenv").config({ path: './.env' });



app.use(bodyParser.json())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use("/user", require("./routes/userRoutes.js"));


app.listen(
    4000,
    console.log('Server is running on 4000')
)