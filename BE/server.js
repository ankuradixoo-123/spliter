const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const userRouters = require("./apis/routes/userRoutes");

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json());


app.use("/api/user",userRouters);

const PORT=dotenv.PORT||5000;

app.listen(PORT,()=>{
  console.log(`App is running on ${PORT}`);
});
