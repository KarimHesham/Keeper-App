const router = require("express").Router();
const passport = require("passport");

const User = require("../models/users");

router.route("signup/").post((req, res) => {
  const registeredUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
  }
  let isAuthenticated = false;
  User.register(registeredUser, req.body.password, function(err, user) {
    if (err) { 
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function() {
        isAuthenticated = true;
        res.send(isAuthenticated);
    });
  }
    });
  });
      
module.exports = router;