function errorHandler(err, req, res, next){
    let code;
    let messages;

    if(err.name === 'Not Found') {
        code = 404
        messages = 'not found'
    } else if(err.name === 'MissingAccessToken'){
        code = 401
        messages = 'missing access token'
    }  else if (err.name === 'SequelizeValidationError'){
        code = 400
        messages = err.errors.map((element) => {
            return element.message
        })
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        code = 400
        messages = err.errors.map((element) => {
            return element.message
        })
    } else if(err.name === 'Forbidden'){
        code = 403
        messages = 'Forbidden'
    } else if(err.name === 'BadRequest') {
        code = 403
        messages = 'bad request'
    } else if(err.name === 'Unauthorized'){
        code = 401
        messages = 'invalid username or email or password'
    } else if(err.name === 'Exists'){
        code = 401
        messages = 'You already on this project'
    } else {
        code = 500
        messages = 'Internal server error'
    }

    res.status(code).json({ messages })
}

module.exports = errorHandler