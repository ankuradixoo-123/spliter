const userDetailsService=require('../services/userDetailsServices');

const userDetailsController=async(req,res)=>{

  const { age,
  phone,
  image,
  country,
  subscriptionStatus,
  
 }=req.body;

  const details=await userDetailsService.postUserDetails({age,
  phone,
  image,
  country,
  subscriptionStatus,userId:req.user.userId});
console.log("Details:", req.user.userId);
  try{
    res.status(201).json({sucess:true,
      mesaage:'details is been successflly pushed!',
      details
    })
  }
  catch(error){
    return res.status(400).json({success:false,message:error.message});
  }
};

module.exports={
  userDetailsController
}