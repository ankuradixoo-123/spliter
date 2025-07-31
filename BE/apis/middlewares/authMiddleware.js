const express=require("express");

const authMiddleware=async(req,res,next)=>{

  const authHeader=req.headers.authorization;

  if(!authHeader||!authHeader.startsWith("Bearer ")){
    return res.status(401).json({
      success:false,
      message:"Unauthorized : token is missing!",
    });
  }

  const token=authHeader.split(" ")[1];

  try{

    const decoded=jwt.verify(token,process.env.JWT);
    req.user=decoded;
    next();
  }
  catch(error){
      return res.status(401).json({
      success: false,
      message: "Unauthorized : Invalid token",
    });
  }
}

module.exports={
  authMiddleware
}
