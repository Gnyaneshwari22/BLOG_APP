//
const mongoose = require("mongoose");


//comment schem description
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //reffereing to the post schema(model)
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})

//export

module.exports = mongoose.model("Comment", commentSchema);