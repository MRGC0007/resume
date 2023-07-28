import express from "express";

const app = express();

const port = 9000;


app.use("/",(req,res)=>{

    res.json({

        message:"hello gaurav"
    })
})

app.listen(9000,()=>{

    console.log(`server is running on ${port}`);
})