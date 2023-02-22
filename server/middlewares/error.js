const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error.";
    console.log("Test"+err.message,err.statusCode)

    res.status(err.statusCode).json({
        success : false,
        err : err.stack
    })
    next();
}