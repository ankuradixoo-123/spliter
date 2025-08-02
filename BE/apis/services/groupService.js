const {PrismaClient} = require("@prisma/client");
const prisma=new PrismaClient();


const createGroup=async({name})=>{

  const groupCheck=prisma.Group.findUnique({where:name});

 if(!groupCheck){
  throw new error({success:false,message:'Duplicate group names found'});
 }

const newGroup=await prisma.Group.create({
  name
})

return newGroup;
};

module.exports={
  createGroup
}