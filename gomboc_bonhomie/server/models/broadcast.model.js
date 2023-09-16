const mongoose = require("mongoose")

const BroadcastSchema = mongoose.Schema({
    broadcastMessage:{
        type:String,
        required:[true, "Name required"]
    },
    comments:[{
        type:mongoose.Types.ObjectId,
        ref:"Comment"
    }]
}, {timestamps:true})

const CommentSchema = mongoose.Schema({
    body:{
        type:String,
        required:[true, "Body required"]
    }
}, {timestamps:true})

// USER CREATES MESSAGE AND PER MESSAGE WE CAN LEAVE COMMENTS
// const MessageSchema = mongoose.Schema({
//     title:{
//         type:String,
//         required:[true, "Title required"]
//     },
//     comments:[{
//         type:mongoose.Types.ObjectId,
//         ref:"Comment"
//     }]
// }, {timestamps:true})

module.exports.Broadcast = mongoose.model("Broadcast", BroadcastSchema);
module.exports.Comment = mongoose.model("Comment", CommentSchema)


// 3 SCHEMA FOR CONNECTING A USER TO A GROUP AND GETTING THE USER'S GROUP ANNIVERSARY
// MEMBERSHIP SCHEMA IS THE THIRD CONNECTION TABLE FOR M2M RELATIONSHIP
// const UserSchema = mongoose.Schema({
//     fullName:{
//         type:String,
//         required:[true, "Body required"]
//     },
//     memberships:[{
//         type:mongoose.Types.ObjectId,
//         ref:"Membership"
//     }]
// }, {timestamps:true})

// const MembershipSchema = mongoose.Schema({
//     member:{
//         type:mongoose.Types.ObjectId,
//         ref:"User"
//     },
//     group:{
//         type:mongoose.Types.ObjectId,
//         ref:"Group"
//     }
// }, {timestamps:true})


// const GroupSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:[true, "Body required"]
//     },
//     memberships:[{
//         type:mongoose.Types.ObjectId,
//         ref:"Membership"
//     }]
// }, {timestamps:true})
