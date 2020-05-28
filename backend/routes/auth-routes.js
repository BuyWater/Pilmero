const Express = require('express');
const Router = Express.Router();
const Passport = require('passport');


Router.get('/google', Passport.authenticate('google', {
    scope: ['profile']
}))

Router.get('/google/callback', Passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
}))

module.exports = Router;