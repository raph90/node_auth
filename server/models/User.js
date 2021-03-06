const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
// define the model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
})
// hash all passwords on save
userSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err)}
        bcrypt.hash(user.password, salt, (err, hash)=>{
            if (err) { return next(err) }
            user.password = hash;
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err){
            return callback(err)
        } 
        // if equal, isMatch will be true, otherwise false
        callback(null, isMatch)
    })
}
// create the model class
const ModelClass = mongoose.model('user', userSchema)


// export the model
module.exports = ModelClass
