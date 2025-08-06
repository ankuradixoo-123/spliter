
const express=require("express");
const router=express.Router();
const groupControllers=require("../Controllers/groupController");
const authMiddleware=require('../middlewares/authMiddleware')

router.post('/newGroup',authMiddleware.authMiddleware,groupControllers.createGroupController);
router.post('/addMembers',authMiddleware.authMiddleware,groupControllers.addMembersController);
router.post('inviteUser',authMiddleware.authMiddleware,groupControllers.inviteUserController)
router.get("/getAllMembers/:groupId",authMiddleware.authMiddleware,groupControllers.getAllMembersPerGroupController);
router.get("/getAllGroups",authMiddleware.authMiddleware,groupControllers.getAllGroupsController);

module.exports=router;