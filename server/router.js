const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', {
   // don't make a cookie based session
   session: false
})

const requireSignin = passport.authenticate('local', {session: false})

module.exports = app => {
   app.get('/', requireAuth, (req, res) => {
      res.send({hi: "you made it "})
   })
   app.post('/signup', Authentication.signup)
   app.post('/signin', requireSignin, Authentication.signin)
}

