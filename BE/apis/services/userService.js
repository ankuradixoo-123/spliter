const bcrypt = require("bcrypt");
const {PrismaClient}=require('@prisma/client');
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

module.exports={registerUser}