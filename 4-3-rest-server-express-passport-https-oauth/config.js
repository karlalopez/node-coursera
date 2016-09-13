
module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl' : 'mongodb://localhost:27017/conFusion',
    'facebook': {
        clientID: process.env.FB_APP_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: 'https://localhost:3443/users/facebook/callback'
    }
}