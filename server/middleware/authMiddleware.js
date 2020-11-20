const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {

    const token = req.cookies.token || '';

    if(!token){
        res.redirect('/login')
    } else {
        jwt.verify(process.env.JWT_SECRET, function(err,decoded){
            if(err) {
                console.log(err);
                return res.redirect('/login')
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

module.exports = verifyToken;