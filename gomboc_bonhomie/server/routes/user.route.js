const UserController = require("../controllers/user.controller")
const { authenticate } = require("../config/jwt.config")

module.exports = app => {
    // DO NOT ADD AUTHENTICATE TO LOGIN AND REG SO THAT USERS CAN FIRST GAIN THEIR JWT TOKENS
    app.get("/")
    app.post("/api/users/register", UserController.register)
    app.post("/api/users/login", UserController.login)
    // app.get("/api/users/logout", UserController.logout)
    // app.post("/api/users/loginreg", UserController.register, UserController.login)

    // ADD AUTHENTICATE TO ANY OTHER ROUTES TO STOP UNAUTHORIZED/UNREGISTERED ACCESS
    app.get("/api/users", authenticate, UserController.getAllUsers)
}