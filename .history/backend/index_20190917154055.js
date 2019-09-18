const express = require('express');
const cors = require('cors');
const passport = require('passport');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(passport.initialize());
app.use(passport.session())



app.listen(port, () => console.log(`server running on port ${port}`))