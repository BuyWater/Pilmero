const Router = require('express').Router()

Router.get('/', (req, res) => {
    res.send('This is your profile page ' + req.user.username)
})

module.exports = Router;