const mongoose = require("mongoose")

// DEFINE COMMENT SCHEMA
const CommentSchema = mongoose.Schema({
    body:{
        type:String,
        required:[true, "Body required"]
    }
}, {timestamps:true})


// DEFINE BROADCAST SCHEMA
const BroadcastSchema = new mongoose.Schema({
    broadcast:{
        type:String,
        required:[true, "Custom name validation requirement"],
        minLength:[2, "Name must be 2 characters long"]
    },
    // date:{
    //     type:Date,
    //     required:[true, "Give me date or else"]
    // },
    // under30Minutes:{
    //     type:Boolean,
    //     required:true
    // }
    // ADD COMMENTS ARRAY TO THE MODEL
    comments:[CommentSchema]
}, {timestamps:true});

// REGISTER SCHEMA
// const Broadcast = mongoose.model('Broadcast', BroadcastSchema);

// module.exports = Broadcast;
module.exports.Broadcast = mongoose.model("Broadcast", BroadcastSchema)
module.exports.Comment = mongoose.model("Comment", CommentSchema)
