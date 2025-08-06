
const express=require("express");
const router=express.Router();
const groupControllers=require("../Controllers/groupController");
const authMiddleware=require('../middlewares/authMiddleware')

router.post('/newGroup',authMiddleware.authMiddleware,groupControllers.createGroupController);
router.post('/addMembers',groupControllers.addMembersController);
router.get("/getAllMembers/:groupId",groupControllers.getAllMembersPerGroupController);
router.get("/getAllGroups",groupControllers.getAllGroupsController)
module.exports=router;