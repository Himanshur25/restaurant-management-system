const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mysql=require('mysql')
const cors=require('cors')
const path =require('path')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const formidable=require('formidable')
const fs=require("fs")
const { dblClick } = require('@testing-library/user-event/dist/click')
const { response } = require('express')

const storage=multer.diskStorage(
    {
        destination:"./public/images",
        filename:(req,file,cb)=> {
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
const upload=multer(
    {
        storage:storage
    })
//const cookiePraser=require('cookie-parser')
app.use(express.json())
app.use(cors())
const con = mysql.createConnection({
    host:process.env.Host,
    database:process.env.Database,
    user:process.env.User,
    password:process.env.Password,
    port:process.env.Port,
    multipleStatements:true

  });

  con.connect((err)=> {
    if (err) throw err;
    console.log("Connected!");
  });
 

//app.use(cookiePraser())
app.get('/',(req,res)=>{
    res.send('Welcome to my server')
})
app.get('/api/login',(req,res)=>{
    res.send('Login');
})
app.get('/api/register',(req,res)=>{
    res.send('Registration')
})
app.get('/api/user',(req,res)=>{
    con.query("select * from user",(err,result)=>{
        if(err){
            return res.status(500).json({
                    message:"Internal server error"
                })
            }
            return res.status(200).json(result)
    })

})
// app.get('/api/user/:id',(req,res)=>{
//     const userr=user.find(c=>c.id===parseInt(req.params.id));
//     if(!userr)res.status(404).send("Error")
//     res.send(userr);
// })
app.post("/api/register",(req,res)=>{
    
    
    const fullname=req.body.fullname
    const email=req.body.email
    const password=req.body.password
    //console.log(fullname+" "+email+" "+password)
    const user={name:fullname}
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN)
    res.json({accessToken:accessToken})
    con.query("insert into user(fullname,email,password) values(?,?,?)",[fullname,email,password],(err,result)=>{
        if(err){
            return res.status(500).json({
                error:"Internal server error"
            })
        }
        if(!fullname || !email || !password){
            return res.status(400).json({
                error:"fill the credential properly"
            })
        }
        return res.status(201).json({
            message:"Registration successful"
        })
    })
})
function authenticateuser(req,res,next)
{
    const authHeader=req.headers("authorization")
    const token=authHeader && authHeader.split('')[1]
    if(token==NULL) return res.sendstatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err) return res.sendstatus(403)
        req.user=user
        next()
    })
}


app.post("/api/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    console.log(email+" "+password)
   if(!email || !password){
    return res.json({
        message:"Enter email and password"
    })
   }
    con.query("select * from user where email=? and password=?",[email,password],(err,result)=>{
        if(err){
        return res.status(500).json({
                message:"Internal server error"
            })
        }
        if(result.length==0){
            return res.status(400).json({
                message:"Wrong email and password"

            })
        }
        return res.status(200).json({
            message:"Login successful"
        })
        })
    
    })
    
    app.post('/api/foods',(req,res)=>{
        const {name,price}=req.body;
        con.query("insert into foods(food_name,food_price,food_image) values(?,?,?)",[name,price,"./images/Vanillashake.jpeg"],(err,result)=>{
                        if(err){
                            return res.json({
                                error:err
                            })
                           
                        }
                        return res.status(201).json({
                            message:"Successfully added"
                        })
            })
        })  

    app.get('/api/foods',(req,res)=>{
        con.query("select * from foods",(err,result)=>{
            if(err){
                return res.status(500).json({
                        message:"Internal server error"
                    })
                }
                return res.status(200).json(result)
        })
    })


    app.post('/api/cart',(req,res)=>{
        const food_id=req.body.food_id
         const id=req.body.user_id
        

         if(!food_id || !id ){
            return res.status(400).json({"error":"error"})
         }

         
        con.query("select * from cart where food_id=?",[food_id],(err,result2)=>{
            if(err){
                return res.status(500).json({
                    error:"Internal server error"
                })
            }
            if(result2.length>0){
                con.query("update cart set quantity=? where cart_id=?",[result2[0].quantity+1,result2[0].cart_id],(err,result1)=>{
                    if(err){
                        return res.status(500).json({
                            error:"Internal server error"
                        })
                    }
                    return res.status(200).json({
                        message:"quantity updated"
                    })
                })
            }else{
        
         con.query("insert into cart(quantity,id,food_id) values(?,?,?)",[1,id,food_id],(err,result)=>{
             if(err){
                 return res.status(500).json({
                     error:"Internal server error"
                 })
             }

             
             return res.status(200).json({
                 message:"Item Added to cart successfully"
             })
         })
        }
        })
    })
        
    
     app.get('/api/cart',(req,res)=>{
        con.query("select food_name,food_price,quantity from cart,foods where foods.food_id=cart.food_id",(err,result)=>{
            if(err){
                return res.status(500).json({
                        message:"Internal server error"
                    })
                }
                return res.status(200).json(result)
        })
    
    })



    const port=process.env.PORT || 5000
    app.listen(port,()=>{
      console.log(`Server is running on ${port}`)
  })