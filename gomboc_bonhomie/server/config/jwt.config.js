const jwt = require("jsonwebtoken")

// DEFINE A FUNCTION CALLED "AUTHENTICATE"
// WE WILL THEN IMPORT THIS INTO OUR ROUTES TO AUTHENTICATE A USER
module.exports.authenticate = (req, res, next) => {
    //SECRET KEY MUST MATCH WITH CONTROLLER'S SECRET KEY
    jwt.verify(req.cookies.usertoken, "SECRET_KEY" , (err, payload) => {
        if (err) {
            // 401 INDICATES AN UNAUTHORIZED REQUEST
            res.status(401).json({verified: false});
            // REDIRECT ISN'T YET WORKING. FIX THIS.
        } else {
            //THIS TELLS US TO MOVE ONTO THE NEXT FUNCTION. INTENTIONALLY LEFT EMPTY
            next();
        }
    });
}

// // THIS IS IF WE CHOOSE TO USE AN ADMIN FUNCTIONALITY AS WELL
// module.exports.adminAuthenticate = (req, res, next) => {
//     //SECRET KEY MUST MATCH WITH CONTROLLER'S SECRET KEY
//     jwt.verify(req.cookies.usertoken, "SUPER_DUPER_SECRET_KEY" , (err, payload) => {
//         if (err) {
//             // 401 INDICATES AN UNAUTHORIZED REQUEST
//             res.status(401).json({verified: false});
//         } else {
//             //THIS TELLS US TO MOVE ONTO THE NEXT FUNCTION. INTENTIONALLY LEFT EMPTY
//             next();
//         }
//     });
// }