const router = require("express").Router();

const path = require('path');
const filePath = "./client/public/index.html";
const resolvedPath = path.resolve(filePath);

console.log(resolvedPath);

router.route("*").get((req, res) => {
    res.sendFile("./client/public/index.html");
});

module.exports = router;