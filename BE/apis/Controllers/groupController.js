const { request } = require("express");
const groupService = require("../services/groupService")

const createGroupController=async(req,res)=>{

  const {name}=req.body;
  
  try{
  const group=await groupService.createGroup({name});

  res.status(201).json({
    success:true,
     message:"group is created sucessfully",
     group:{
        name:group.name,
      },
  });
}
catch(error){
  res.status(400).json({success:false,message:error.message});
}

}

const addMembersController=async(req,res)=>{

  const {groupId,userIds}=req.body;
  try{

    const result=await groupService.addMembers({groupId,userIds});

    res.status(200).json({
      success:true,
      message:`${result.addedCount} members added sucessfully`
    })

  }
  catch(error){
      res.status(400).json({success:false,message:error.message});
  }
 
};

const getAllMembersPerGroupController=async(req,res)=>{

  const groupId = req.params.groupId;

   const userData=await groupService.getAllMembers(Number(groupId));

  try{

    res.status(200).json({
      success:true,
      allUsers:userData
    })
  }
  catch(error){
    res.status(400).json({success:false,message:error.message});
  }
};

const getAllGroupsController=async(req,res)=>{

  const {name}=req.query;

  const allGroupData=await groupService.getAllGroups({name});

  try{
    res.status(200).json({
      success:true,
      allGroData:allGroupData
    })
  }
  catch(error){
    return res.status(400).json({success:false,message:error.message});
  }
};
module.exports={
  createGroupController,
  addMembersController,
  getAllMembersPerGroupController,
  getAllGroupsController
}