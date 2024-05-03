const express=require("express");
const path=require("path");
const app=express();
const cors=require("cors");
const express_fileupload=require("express-fileupload");
const router = require("./routes");


// cors
app.use(cors({
    origin:"*",
    methods:["POST","GET","PUT","DELETE"],
    credentials:true,
}));

// middleware
app.use(express.json());

//fileupload
app.use(express_fileupload());

app.use(express.static(path.join(__dirname,'./controller/upload')));
app.use(express.static(path.join(__dirname,'./controller/images')));

// routes
app.use("/api/v1",router);
app.get("/",(req,res)=>{
    res.send("Working...");
})


app.listen(5050,()=>{
    console.log("Server is running on 5050");
});