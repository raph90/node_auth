const passport = require('passport')
const User = require('../models/User')
const JwtStrategy = require('passport-jwt').Strategy; 
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')



// create local strategy
const localOptions = { usernameField: 'email'}

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    // here we will have access to the email and password
    User.findOne({ email }, function(err, user){
        if (err) return done(err)
        if (!user){
            return done(null, false)
        } 

        // use the User method to compare the passwords
        user.comparePassword(password, function(err, isMatch) {
            if (err) { return done(err)}
            
            if (!isMatch){ return done(null, false)}

            return done(null, user);
        })
        // compare passwords - is password === user.password?

    })

});

// setup options for JWT strategy
const jwtOptions = {
    // tell the strategy where to find the payload
    // here we're saying the header 
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}


// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
   // the payload is the decoded jwtToken. This is equivalent to the sub property and iat that we sent 
   // see if user id in payload exists in our db
    User.findById(payload.sub, function(err, user){
        if (err) return done(err, false);
        if (user){
            done(null, user)
        } else {
            done(null, false)
        }
    })
   //> if it does, call 'done' with that user

   //! otherwise, call done without a user object
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)