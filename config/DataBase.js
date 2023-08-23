 const mongoose = require("mongoose");

 require("dotenv").config();

 const dbConnect= () =>{
      mongoose.connect(process.env.DATA_BASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology : true,
      })
      .then(()=> console.log("DB ka Connection Sucessfully hogaya"))
      .catch((error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
           
        process.exit(1);
      });
 }

 module.exports = dbConnect;