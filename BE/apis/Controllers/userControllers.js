const userService=require("../services/userService");

const registerUser=async(req,res)=>{

  try{
    const {name,email,password}=req.body;

    const user=await userService.registerUser({name,email,password});

    res.status(201).json({
      success:true,
      message:"user registered sucessfully",

      user:{
        id:user.id,
        name:user.name,
        email:user.email
      },
    });
  }catch(error){
    res.status(400).json({success:false,message:error.message});
  }
};

module.exports={
  registerUser
}

