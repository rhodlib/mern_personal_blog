//Imports
const User = require("../models/User");

//User controller Object
const userCtrl = {};

//Functions
userCtrl.userLogout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();

    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = userCtrl;
