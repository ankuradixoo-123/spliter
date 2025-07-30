const express=require("express");
const router=express.Router();
const userController=require("../Controllers/userControllers");

router.post("/register",userController.registerUser);

module.exports=router;