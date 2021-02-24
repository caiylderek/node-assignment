const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer", "").trim();
  console.log("Token: ", token);
  try {
    let data = await jwt.verify(token, process.env.JWT_KEY);
    req.user = data;
    next();
  } catch (error) {
    console.log(JSON.stringify(error));
    console.log(error.stack);
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};

module.exports = auth;
