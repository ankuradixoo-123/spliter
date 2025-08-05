const groupService = require("../services/groupService")

const groupControllers=async(req,res)=>{

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

module.exports={
  groupControllers,
  addMembersController
}