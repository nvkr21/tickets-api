const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const bearerHeader = req.headers["authorization"]
    if(typeof bearerHeader != 'undefined'){
        const token = bearerHeader.split(' ')[1]
        jwt.verify(token, "secret-key", (err, authData) => {
            if(err){
                res.sendStatus(401)
            }else{
                next()
            }
        })
    }else{
        res.sendStatus(403)
    }
}