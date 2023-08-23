const express = require("express");
const app = express();

require("dotenv").config();
const PORT= process.env.PORT_NO || 8000;

app.use(express.json());

const BlogRoute = require("./route/blog");

//Mounting the blog API Route

app.use("/api/v1",BlogRoute);

const dbConnection = require("./config/DataBase");
dbConnection();

app.listen(PORT,(req,res)=>{
   console.log(`server has been started at port ka number ${PORT}`);
})

app.get("/" ,(req,res) => {
     res.send("This is my HOMEPAGE dude");
 })