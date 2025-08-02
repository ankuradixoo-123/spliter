const groupService = require("../services/groupService")

const groupControllers=async(req,res)=>{

  const {name}=req.body;
  
  try{
  const group=await groupService.createGroup({

  })
}
catch(error){
  return 
}

}

module.exports={
  groupControllers
}