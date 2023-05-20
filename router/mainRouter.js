const express = require('express');
const AuthRouter = express.Router();
const RegisterUser =require("../controller/register")
const LoginUser =require("../controller/login")
const getUser = require("../controller/getUser")
const Validator =require("../utils/validator")

AuthRouter.post("/register",RegisterUser);
AuthRouter.post("/login", LoginUser);


// authorized route 
AuthRouter.get("/user",Validator,getUser);




module.exports = AuthRouter;