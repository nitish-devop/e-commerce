const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");

router.route("/:id").get(user_controller.getUser);
router.route("/register").post(user_controller.createUser);
module.exports = router;
