const mongoose= require("mongoose");

const postSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true,
     },
     body: {
        type:String,
        required:true,
     },
     likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like",//referring to like model
     }],
     comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",// referrring to comment model
     }]
})


//export 

module.exports = mongoose.model("Post",postSchema);