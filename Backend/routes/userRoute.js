const {userSignup, loginUser} = require("../controller/userController");
const express = require("express");
const router = express.Router(); 

router.route("/userSignup").post(userSignup);
router.route("/userLogin").post(loginUser);



module.exports =router;