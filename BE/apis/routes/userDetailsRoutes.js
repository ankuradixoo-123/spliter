const express=require('express');
const router=express.Router();
const userDetailsController=require('../Controllers/userDetailsController');
const authMiddleware  = require('../middlewares/authMiddleware');

router.post('/userDetails',authMiddleware.authMiddleware,userDetailsController.userDetailsController);

module.exports=router;
