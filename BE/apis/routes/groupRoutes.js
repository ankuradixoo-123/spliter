
const express=require("express");
const router=express.Router();
const groupControllers=require("../Controllers/groupController");
const authMiddleware=require('../middlewares/authMiddleware')

router.post('/newGroup',authMiddleware.authMiddleware,groupControllers.groupControllers);
router.post('/addMembers',groupControllers.addMembersController);
module.exports=router;