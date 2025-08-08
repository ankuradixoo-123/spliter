const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postUserDetails = async ({
  age,
  phone,
  image,
  country,
  subscriptionStatus,
  userId
}) => {

  console.log("User ID:", userId);
  const userDetailsCreated = await prisma.userDetails.create({
    data: {
      age,
      phone,
      image,
      country,
      subscriptionStatus,
      user: { connect: { id: userId } }
    },
  });
  return userDetailsCreated;
};


module.exports={
  postUserDetails
}
