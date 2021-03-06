const Joi = require('joi')

module.exports = {
    register(req, res, next) {

        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{5,32}$'))
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email': 
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match the following rules:
                        <br>
                        1. It must contain only the following characters: lower case, upper case and numeric.
                        <br>
                        2. It must be at least 8 characters in length and not greater then 32.
                        `
                    })
                
                break
                default: 
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()       
        }
        
    }
}