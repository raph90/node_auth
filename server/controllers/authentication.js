const User = require('../models/User.js')
const jwt = require("jwt-simple");

function tokenForUser(user){
    const timestamp = new Date().getTime()
    return jwt.encode({
        // subject
        sub: user.id,
        // specify when the token was made
        iat: timestamp
    }, process.env.JWT_SECRET)
}

exports.signin = (req, res, next) => {
    // user has been authed, we just need to give them a token.
    res.send({token: tokenForUser(req.user)})
}


exports.signup = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password){
        return res.status(422).send({ error: "You must provide email and password"})
    }
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return next(err)
        }

        if (existingUser){
            console.log("There is an existing user")
            return res.status(422).send({ error: "Email is in use"})
        }

        const user = new User({
            email,
            password
        })

        user.save(err => {
            if (err){
                return next(err)
            } else {
                console.log("successfully saved")
                res.json({ token: tokenForUser(user) })
            }
        })
    })

   // see if user with a given email exists
   // if a user with email does exist return an error
   // if user with email does not exist, create and save 
   // respond to request
}