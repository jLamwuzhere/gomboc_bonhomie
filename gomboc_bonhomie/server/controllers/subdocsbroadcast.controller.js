// const Broadcast = require("../models/broadcast.model")
const { json } = require("express")
const {Broadcast, Comment} = require("../models/broadcast.model")

module.exports.createBroadcast = (req, res) => {
    Broadcast.create(req.body)
        .then(newBroadcast => {
            console.log(newBroadcast)
            res.json(newBroadcast)
        })
        .catch(errors => res.status(400).json(errors))
}
// --------------------------CRUD FOR BROADCASTS (MESSAGES)----------------------------------
// READ ALL
module.exports.allBroadcasts = (req, res) => {
    Broadcast.find()
        .then(allBroadcasts => res.json(allBroadcasts))
        .catch(errors => res.json(errors))
}
// READ ONE
module.exports.oneBroadcast = (req,res) => {
    Broadcast.findOne({_id: req.params.broadcast_id})
        .then(oneBroadcast => res.json(oneBroadcast))
        .catch(errors => res.json(errors))
}
// UPDATE
module.exports.updateBroadcast = (req, res) => {
    Broadcast.findByIdAndUpdate({_id:req.params.broadcast_id}, req.body, {new:true, runValidators:true})
        .then(updatedBroadcast => res.json(updatedBroadcast))
        .catch(errors => res.status(400).json(errors))
}
// DELETE
module.exports.deleteBroadcast = (req, res) => {
    Broadcast.deleteOne({_id:req.params.broadcast_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}

// --------------------CRUD FOR COMMENTS------------------------
//CALLBACK HELL EXAMPLE --- too much nesting!!!
module.exports.createComment = (req, res) => {
    const {broadcast_id} = req.params
    Comment.create(req.body)
        // .then(newComment => res.json(newComment))
        .then(newComment => {
            // NEED TO FIND THE BROADCAST
            Broadcast.findOne({_id:broadcast_id})
                .then(oneBroadcast => {
                    oneBroadcast.comments.push(newComment)
                    oneBroadcast.save(function(err, saveResults){
                        if(!err){
                            res.status(200).json(saveResults)
                        }
                        else{
                            res.status(400).json(err)
                        }
                    })
                })
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
}

//THE BETTER WAY TO CODE
// turn function async and then add AWAIT to make it async again.
module.exports.asyncCreateComment = async (req, res) => {
    const {broadcast_id} = req.body
    // FIND A BROADCAST [MESSAGE] WITH ID
    try{
        const broadcast = await Broadcast.findOne({_id : broadcast_id})
        // IF NO BROADCAST [MESSAGE] EXISTS, RETURN AN ERR RESPONSE
        if(!broadcast){
            return res.status(400).json(`BROADCAST WITH ID ${broadcast_id} DOES NOT EXIST`)
        }
        const newComment = newComment(req.body)
        // PUSH NEW COMMENT INTO THE EXISTING BROADCAST[MESSAGE]
        broadcast.comments.push(newComment)
        broadcast.markModified("comments")
        
        // UPDATE THE   BROADCAST [MESSAGE] IN THE DB
        broadcast.save(function(err, saveResults){
            if(!err){
                res.status(200).json(saveResults)
            }
            else{
                res.status(400).json(err)
            }
        })
    } catch(error) {
        res.status(400).json
    }
}

module.exports.findCommentInBroadcast = (req, res) => {
    Broadcast.findOne({"comments._id": req.params.comment_id})
        .then(oneBroadcast => req.json(oneBroadcast))
        .catch(err => req.json(err))
        
}

module.exports.CreateComment2 = async (req, res) => {
    const {broadcast_id} = req.params
    // FIND A BROADCAST [MESSAGE] WITH ID
    try{
        const broadcast = await Broadcast.findOne({_id : broadcast_id})
        // IF NO BROADCAST [MESSAGE] EXISTS, RETURN AN ERR RESPONSE
        if(!broadcast){
            return res.status(400).json(`BROADCAST WITH ID ${broadcast_id} DOES NOT EXIST`)
        }
        const newComment = newComment(req.body)
        // PUSH NEW COMMENT INTO THE EXISTING BROADCAST[MESSAGE]
        broadcast.comments.push(newComment)
        broadcast.markModified("comments")
        
        // UPDATE THE   BROADCAST [MESSAGE] IN THE DB
        broadcast.save(function(err, saveResults){
            if(!err){
                res.status(200).json(saveResults)
            }
            else{
                res.status(400).json(err)
            }
        })
    } catch(error) {
        res.status(400).json
    }
}

module.exports.findComment = (req, res) => {
    Comment.findOne({_id:req.params.comment_id})
        .then(oneComment => res.json(oneComment))
        .catch(err => res.json(err))
}

module.exports.updateComment = (req, res) => {
    Comment.findByIdAndUpdate({_id:req.params.comment_id}, req.body, {new:true, runValidators:true})
        .then(updatedComment => res.json(updatedComment))
        .catch(err => res.json(err))
}

module.exports.editComment = async (req, res) => {
    const {comment_id} = req.params

    const message = await Message.findOne({"comments._id" : comment_id})

    // UPDATE THE COMMENT
    let comment = message.comments.id(comment_id)
    comment.body = req.body.body
    message.markModified("comments")

    // SAVE THE MESSAGE TO PERSIST THE CHANGES
    message.save(function(err, updateResults){
        if(!err){
            res.status(200).json(updateResults)
        }
        else{
            res.status(400).json(err)
        }
    })
}

module.exports.deleteComment = async (req,res) => {
    // FIND THE MESSAGE
    const {comment_id} = req.params

    const message = await Message.findOne({"comments._id" : comment_id})
    if(!message){
        return res.status(400).json(`MESSAGE WITH ID ${message_id} DOES NOT EXIST`)
    }
    // INSIDE THE MESSAGE OBJECT, DELETE THE COMMENT
    message.comments.id(comment_id).remove(function(err){
        if(err){
            return res.status(400).json(err.messsage)
        }
    })

    // SAVE THE MESSAGE TO PERSIST THE CHANGES
    message.save(function(err, deleteResults){
        if(!err){
            res.status(200).json(deleteResults)
        }
        else{
            res.status(400).json(err)
        }
    })

}