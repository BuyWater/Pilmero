let express = require('express');
let bodyParser = require('body-parser');
let routes = require('./routes/api')
let authRoutes = require('./routes/auth-routes')
let profileRoutes = require('./routes/profile-routes')
const cookieSession = require('cookie-session')
const passportSetup = require('./config/passport-setup')
const passport = require('passport')


require('dotenv').config();

let app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
})

  
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.listen(process.env.PORT || 5000);