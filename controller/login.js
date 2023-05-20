const UserModal = require("../models/userSchema");
const jwt = require("jsonwebtoken");

async function LoginUser(req, res, next) {
  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email) {
      return res.json({ error: "email not found" });
    }

    const data = await UserModal.findOne({ email });

    if (!data) {
      return res.json({ message: "not a valid user email" });
    } else {
      let accessToken = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, {
        expiresIn: "20m",
      });

      return res.json({
        message: "logged in successfully",
        login: true,
        token: accessToken,
      });
    }
  } catch (err) {
    return res.json({ error: "An error occurred" });
  }
}

module.exports = LoginUser;
