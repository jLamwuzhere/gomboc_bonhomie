const { User } = require ("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {
    // module.exports.register = (req, res, next) => {
    console.log ("---------------------REGISTERING NOW------------------------")
    User.exists({email: req.body.email})
        .then(userExists => {
            // IF USER EXISTS SEND BACK AN ERROR
            if(userExists) {
                // The REJECT triggers the CATCH
                return Promise.reject({
                    errors: {"duplicate": "Email already taken"}
                })
            }
            else{
                const user = new User(req.body)
                return user.save()
            }
        })
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).json(err))
    console.log ("---------------------EXITING REGISTER-----------------------")
        // // IF WE ARE USING NEXT, WE MUST FIRST CALL IT AT THE TOP OF OUR FUNCTION
        // next()
}
module.exports.login = (req, res) => {
// module.exports.login = (req, res, next) => {
    console.log ("---------------------LOGGING USER IN NOW------------------------")
    // CHECK TO SEE IF THE EMAIL EXISTS
    User.findOne({email: req.body.email})
        .then(user => {
            // IF EMAIL DOESN'T EXIST, SEND BACK AN ERROR
            if(user === null) {
                res.status(400).json({msg: "INVALID LOGIN" })
            }
            else {
                // IF USER EMAIL EXISTS COMPARE PROVIDED PASSWORD WITH THE ACCOUNT PASSWORD
                bcrypt.compare(req.body.password, user.password)
                    //  IF IT'S VALID, ASSIGN A JWT USERTOKEN TO THAT USER TO AUTHENTICATE
                    .then(passwordIsValid => {
                        if(passwordIsValid) {
                            const newJWT = jwt.sign({
                                _id: user._id
                                // SECRET KEY GOES HERE. IT CAN BE WHATEVER WE WANT.
                                // Additionally, takes an optional expiration period input
                            }, "SECRET_KEY", { expiresIn: "7d" })
                            res.cookie("usertoken", newJWT,  { httpOnly: true }).json("success")
                            // CODE TO HIT REDIRECT HERE
                        }
                        else{
                            // IF THE PASSWORD ISN'T VALID, SEND BACK AN ERROR MESSAGE
                            res.status(400).json({msg:"INVALID ATTEMPT"})
                        }
                    })
            }
        })
        console.log ("---------------------EXITING LOGIN NOW------------------------")
        // // IF WE ARE USING NEXT, WE MUST FIRST CALL IT AT THE TOP OF OUR FUNCTION
        // next()
}



module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(errors => res.json(errors))
}

// module.exports.logout = (req, res) => {
//     console.log ('--------------------------ENTERING LOGOUT---------------------------------')
//     res.clearCookie('usertoken')
//     console.log("Cookie being cleared")
//     console.log ('---------------------------EXITING LOGOUT----------------------------------')
// }