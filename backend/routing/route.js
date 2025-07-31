const express= require('express');
const myapp= express();
const myschema= require('../schematype/dataschema');


myapp.get("/",(req,res)=>{
      res.send("This is default api for try");
});

myapp.get("/about",(req,res)=>{
    res.send("this is about page");
});

myapp.post("/userregister", async (req,res)=>{
    const{fullname,email,phone,dob,pass,gender}= req.body;
    const registerdata= await myschema({fullname,email,phone,dob,pass,gender}).save();
    res.send({msg:"register succesfully",status:221,data:registerdata});
});
myapp.get("/allusers", async (req,res)=>{
    const users= await myschema.find();
     res.send({msg:"all user list",status:251,allusers:users});
}); 
myapp.delete("/deleteusers/:id", async (req,res)=>{
    const id= req.params.id;
    const removeu= await myschema.findByIdAndDelete({_id:id});
     res.send({msg:"delete user",status:255,allusers:removeu});
}); 

myapp.get("/singleuser/:id", async(req,res)=>{
    const id= req.params.id;
    const single= await myschema.find({_id:id});
      res.send({msg:"single user found",status:251,user:single});
});
myapp.post("/userlogin", async (req,res)=>{
    const{email,pass}= req.body;
    if(email=="" || pass==""){
       res.send({msg:"email and password are med" ,status:440});
    }
    else{
        const loginuser= await myschema.findOne({email: email});
        if (loginuser) {
            if(loginuser.email==email && loginuser.pass==pass){
                res.send({msg:"login successfully", status:220})
            }
            
        }else{
            res.send({msg:"email not match", status:420})
        }
    }
})

module.exports= myapp;

