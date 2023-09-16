//IMPORT DEPENDENCIES
const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")

// INSTANTIATE EXPRESS SERVER
const app = express()
const port = 8000

// SETUP MIDDLEWARE
require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
// CONFIGURE CORS TO ACCEPT CREDENTIALS AND ONLY ACCEPT REQUESTS ORIGINATING FROM LOCALHOST:3000
//THIS IS BECAUSE WE ARE SENDING CONFIDENTIAL INFO BACK AND FORTH AND WE NEED TO ENSURE SECURITY
app.use(cors({credentials:true, origin:"http://localhost:3000"}))

// CONNECT ROUTES
const userRoutes = require("./routes/user.route")
userRoutes(app)

const broadcastRoutes = require("./routes/broadcast.route")
broadcastRoutes(app)


// START EXPRESS SERVER
app.listen(port , () => console.log(`EXPRESS RUNNING ON PORT ${port}`))