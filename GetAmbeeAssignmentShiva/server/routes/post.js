const express = require("express");
const getpost = require("./../controllers/post");
const userController = require("./../controllers/post");
const router = express.Router();

router.get("/", userController.getpost);
router.post("/", userController.createUserData);

module.exports = router;
