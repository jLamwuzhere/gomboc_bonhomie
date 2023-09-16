const { authenticate } = require("../config/jwt.config")

const BroadcastController = require("../controllers/broadcast.controller");

module.exports = (app) => {
    // --------------ROUTES FOR MESSAGES-----------------------
    // CREATE
    app.post("/api/broadcasts/new", authenticate, BroadcastController.createBroadcast);
    // READ ONE
    app.get("/api/broadcasts/:broadcast_id", authenticate, BroadcastController.oneBroadcast);
    // READ ALL
    app.get("/api/broadcasts", authenticate, BroadcastController.allBroadcasts);
    // UPDATE
    app.put("/api/broadcasts/:broadcast_id", authenticate, BroadcastController.updateBroadcast);
    // DELETE
    app.delete("/api/broadcasts/:broadcast_id", authenticate, BroadcastController.deleteBroadcast);

    // -------------ROUTES FOR COMMENTS-----------------------------
    app.post("/api/comments/:broadcast_id", Controller.createComment)
    app.post("/api/comments", Controller.asyncCreateComment)
    // app.get("/api/comments/:comment_id", Controller.findComment)
    app.get("/api/comments/:comment_id", Controller.findCommentInMessage)
    app.put("/api/comments/:comment_id", Controller.updateComment)
};

