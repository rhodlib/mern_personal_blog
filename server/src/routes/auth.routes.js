//Imports
const { Router } = require("express");
const router = Router();
const { loginUser } = require("../controllers/auth.controller");

//Routes

router.post("/api/user/login", loginUser);

//Export module
module.exports = router;
