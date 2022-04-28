const { verify } = require('../helpers/jwtHelper')
const{ User } = require('../models')

async function authenticationMiddleWare(req, res, next){
    try {
        if(!req.headers.accesstoken) throw { name : 'MissingAccessToken'}
        const payload = verify(req.headers.accesstoken)
        const  {id, email } = payload
        const user = await User.findOne({ where : { email }})
        if(!user) throw{ name : 'Unauthorized'}

        req.user = {
            id : user.id,
            email: user.email,
            role: user.role
        }

        next()
        
    } catch (err) {
        next(err)
    }
}

module.exports = authenticationMiddleWare