const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const cors=require("cors");
const bodyParser = require('body-parser');
const inviteRoutes = require('./apis/routes/inviteRoutes');
const userRouters = require("./apis/routes/userRoutes");
const groupRoutes= require("./apis/routes/groupRoutes")
const expensesRoutes=require("./apis/routes/expenseRoutes");
const userDetailsRoutes=require('./apis/routes/userDetailsRoutes');
const app=express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user",userRouters);
app.use("/api/group",groupRoutes);
app.use("/api/expenses",expensesRoutes);
app.use("/api/userDetails",userDetailsRoutes);


app.use('/api/invite', inviteRoutes);
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
  console.log(`App is running on ${PORT}`);
});
