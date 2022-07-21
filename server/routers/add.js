const express=require("express")
const Userdb=require("../models/user")
const router=express.Router()
const bcrypt=require("bcrypt")

router.post("/singup",(req,res)=>{
    const{name , email, password}=req.body;
    if(!name||!email||!password){
        return res.status(400).json({
            message:"Please fill all fields"
        });

    }
   
    Userdb.findOne({email:email})
    .then(savedUser=>{
        if(savedUser){
            return res.status(400).json("User aleardy exists")
        }
        bcrypt.hash(password,10).then(hash=>{
            const user=new Userdb({
                name:name,
                email:email,
                password:hash
            });
            user.save().then((user)=>{
             res.json({
                message:"User created successfully",
                user
            })
    
            }).catch(err=>{
                res.status(400).json({massage:err})
            })
            res.json({
                message:"Signup successful",
                user})
        })
       
            
    })
})



module.exports=router