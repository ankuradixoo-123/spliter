const bcrypt = require("bcrypt");
const {PrismaClient}=require('@prisma/client');
const jwt = require("jsonwebtoken");
const prisma=new PrismaClient();

const registerUser=async({name,email,password})=>{

  const existingUser=await prisma.user.findUnique({
    where:{email},
  });

  if(existingUser){
    throw new Error("user already exists with this emeil!");
  }

  const hashadPassword=await bcrypt.hash(password,10);

  const newUser=await prisma.user.create({
    data:{
      name,
      email,
      password:hashadPassword
    },
  });
  return newUser;
}

const loginUser=async({email,password})=>{

  const user=await prisma.user.findUnique({
    where : {email}
  });

  if(!user){
       throw new Error ('user not exists!')
  }

  const isPasswordValid = await bcrypt.compare(password,user.password);

   if (!isPasswordValid) {
    throw new Error('Incorrect password!');
  }

  
  const token=jwt.sign(
    {userId:user.id,email:user.email},
     process.env.jwt,
     {expiresIn:'5d'}
  );

  return {token,user};

};

module.exports={registerUser,loginUser}