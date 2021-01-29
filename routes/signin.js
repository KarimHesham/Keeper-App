const router = require("express").Router();
const passport = require("passport");

let User = require("../models/users");


router.route("/signin").post((req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
      });
      let isAuthenticated = false;
    req.login(user, function(err){
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local")(req, res, function(){
            isAuthenticated = true;
            res.send(isAuthenticated);
            console.log("User found in database!");
          });
        }
      });
    });
   
module.exports = router;