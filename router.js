var express = require("express");
var router = express.Router();

const credential ={
    email:"admin@gmail.com",
    password:"admin123"
}

router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password==credential.password)
    {
        req.session.user=req.body.email;
        //console.log(req.session.user);
        //res.end("Successful login");
        res.redirect('/route/dashboard')
    }
    else{
        res.end("Invalid username");
    }
})

router.get('/dashboard',(req,res)=>
{
    if(req.session.user)
    {
        //console.log("here");
        res.render('home',{user : req.session.user})
    }
    else
    {
        res.end("Unauthorised User")
    }
});

router.get('/logout',(req,res)=>
{
    req.session.destroy((err)=>{
        if(err)
        {
            console.log(err);
            res.send;
        }
        else
        {
            res.redirect('/');
        }
    })
})

module.exports = router;