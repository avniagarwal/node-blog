const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const vhost = require("vhost");

// routes
const posts = require('./routes/api/post');
const users = require('./routes/api/user');
const Post = require('./models/Post');
const User = require('./models/User');


const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// subdomain
app.get('/', function (req, res) {
    var domain = req.hostname, subs = domain.split('.');
    if(subs.includes('user')){
        User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
    }

    if(subs.includes('blog')){
        Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));
    }
})

// use Routes
// if(subdomainss.includes('user')){
//     app.use('/', users)
// }

// if(subdomainss.includes('blog')){
//     app.use('/', posts)
// }
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));