//Imports
const { Router } = require("express");
const router = Router();
const { userLogout } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

//Routes
router.post("/api/user/logout", auth, userLogout);

//Export
module.exports = router;
