const router = require("express").Router();

router.route("/").get((req, res) => {
    req.logout();
    res.json("You are logged out!");
});

module.exports = router;