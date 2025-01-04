

const authmiddleware = (req, res, next) => {
    console.log('Auth Middleware is called');
    next();
}
module.exports = authmiddleware;
