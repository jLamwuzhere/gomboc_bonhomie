const Controller = require("../controllers/broadcast.controller");
const { authenticate } = require("../config/jwt.config")

module.exports = (app) => {
  // --------------ROUTES FOR MESSAGES-----------------------
  // CREATE
  app.post("/api/broadcasts", authenticate , Controller.createBroadcast);
  // READ ONE
  // app.get("/api/broadcasts/:broadcast_id", authenticate, Controller.oneBroadcast);
  app.get("/api/broadcasts/:broadcast_id", authenticate , Controller.oneBroadcastAsync);
  // READ ALL
  app.get("/api/broadcasts", authenticate , Controller.allBroadcasts);
  // UPDATE
  app.put("/api/broadcasts/:broadcast_id", authenticate , Controller.updateBroadcast);
  // DELETE
  app.delete("/api/broadcasts/:broadcast_id", authenticate , Controller.deleteBroadcast);

  // -------------ROUTES FOR COMMENTS-----------------------------
  app.post("/api/comments/:broadcast_id", Controller.createComment)
  app.post("/api/comments", Controller.asyncCreateComment)
  // app.get("/api/comments/:comment_id", Controller.findComment)
  app.get("/api/comments/:comment_id", Controller.findCommentInBroadcast)
  app.put("/api/comments/:comment_id", Controller.updateComment)
};

