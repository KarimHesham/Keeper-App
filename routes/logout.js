const router = require("express").Router();

router.route("/logout").get((req, res) => {
    req.logout();
    res.json("You are logged out!");
});

module.exports = router;