require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

const auth = require('./router/auth.router');
const articles = require('./router/articles.router');

mongoose.connect(process.env.MONGODB);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(
  session({
    name: 'sessionCookie',
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/auth', auth);
app.use('/articles', articles);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
