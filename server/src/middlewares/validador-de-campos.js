const { validationResult } = require('express-validator');

const validacioncampos = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.errors);
        return res.status(400).json({
        ok : false,
        errors: errors.errors[0]
     });
    }
    next();
}

module.exports = {
    validacioncampos
}