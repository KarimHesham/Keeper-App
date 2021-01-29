//jshint esversion:6
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
// const path = require('path');
// const filePath = "./client/public/index.html"
// const resolvedPath = path.resolve(filePath);

// console.log(resolvedPath);



const notesRouter = require("./routes/notes");
const registerRouter =  require("./routes/signup");
const loginRouter = require("./routes/signin");
const landingRouter = require("./routes/landing");
const logoutRouter = require("./routes/logout");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 

app.use(express.json());
app.set('view engine', 'ejs');
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
}));   

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  secret:"This is keeper clone.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://Karim:keeper@keeper.ickkk.mongodb.net/keeperDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDb database connection established successfully");
});

const User = require("./models/users");
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static('/public/index.html'));



app.use("/", notesRouter);
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", landingRouter);
app.use("/", logoutRouter);



// app.use(express.static(path.join(__dirname, './client/build')))

// app.get('*', function(_, res) {
//   res.sendFile(path.join(__dirname, resolvedPath), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

  


app.listen(port, () => {
    console.log("Server is running on port 3000!");
});