const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createGroup = async ({ name }) => {
  const groupCheck = await prisma.group.findFirst({
    where: { name }
  });

  if (groupCheck) {
    throw new Error("Duplicate group name found");
  }

  const newGroup = await prisma.group.create({
    data: {
      name
    }
  });

  return newGroup;
};

const addMembers=async({groupId,userIds})=>{

  // check for user and group json input from client
if(!groupId||userIds.length===0){
throw new Error ('groupId & userIds are required!');
}


// check the group is unique or not 
const group=await prisma.group.findUnique({
  where:{id : groupId}
});

if(!group){
  throw new Error("group not exists!");
}

const newMembers=[];

for(const userId of userIds){
  //check for user already a member or not

  const existing=await prisma.groupMember.findUnique({
    where:{
      userId_groupId:{userId,groupId}
    }
  });

  if(!existing){
    newMembers.push({
      userId,
      groupId
    });
  }
}

// all the user bulk insert

const addMembers=await prisma.groupMember.createMany({
  data:newMembers,
  skipDuplicates:true
});

return {addedCount : addMembers.count};
};
module.exports = {
  createGroup
  ,addMembers
};
