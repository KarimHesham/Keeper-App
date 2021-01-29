const router = require("express").Router();

const path = require('path');
const filePath = "../build/index.html";
const resolvedPath = path.resolve(filePath);

// console.log(resolvedPath);

// router.route("/").get((req, res) => {
//     res.sendFile(filePath);
// });

module.exports = router;