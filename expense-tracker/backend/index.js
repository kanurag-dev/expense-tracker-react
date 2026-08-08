const express=require("express")
const PORT = process.env.PORT || 3000;
const app=express()
const connectDB=require("./db")
const expenseROutes=require("./routes/expenses")
const cors=require("cors")






app.use(express.json())
connectDB();
app.use(cors());
app.use("/api",expenseROutes)


app.get("/",(req,res)=>{
    res.send("expense tracker backend")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server running on ${PORT}`)
})