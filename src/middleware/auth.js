const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something(e.g. run a fun) -> run route handler

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token})
        
        if(!user){
            throw new Error()
        }
        
        req.token = token       // add current login token to req 
        req.user = user         // add user to req
        // console.log("user auth:"+ user.name)
        next()
    } catch (e) {
        res.status(401).send({error: 'Please authenticate.'})
    }
}

module.exports = auth