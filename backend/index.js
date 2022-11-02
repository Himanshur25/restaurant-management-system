const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mysql=require('mysql')
const cors=require('cors')
//const jwt=require('jsonwebtoken ')
//const cookiePraser=require('cookie-parser')
app.use(express.json())
app.use(cors())
const con = mysql.createConnection({
    host:process.env.Host,
    database:process.env.Database,
    user:process.env.User,
    password:process.env.Password,
    port:process.env.Port

  });
  
  con.connect((err)=> {
    if (err) throw err;
    console.log("Connected!");
  });
  const port=process.env.PORT || 5000
  app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

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
    app.post('/api/Food',(req,res)=>{
        const food_id=req.body.food_id
        const food_name=req.body.food_name
        const food_price=req.body.food_price
        con.query("insert into Food(food_id,food_name,food_price) values(?,?,?)",[food_id,food_name,food_price],(err,result)=>{
            if(err){
                return res.status(500).json({
                    error:"Internal server error"
                })
            }
            if(!food_id || !food_name || !food_price){
                return res.status(400).json({
                    error:"fill the credential properly"
                })
            }
            return res.status(201).json({
                message:"Item Added successfully"
            })
        })
    })