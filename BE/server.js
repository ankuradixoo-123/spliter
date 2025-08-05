const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const cors=require("cors");
const userRouters = require("./apis/routes/userRoutes");
const groupRoutes= require("./apis/routes/groupRoutes")


const app=express();

app.use(cors());

app.use(express.json());

app.use("/api/user",userRouters);
app.use("/api/group",groupRoutes);

const PORT=dotenv.PORT||5000;

app.listen(PORT,()=>{
  console.log(`App is running on ${PORT}`);
});
