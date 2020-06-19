const express= require('express')
const signupRoutes = express.Router();

function router(nav)
{
signupRoutes.get('/',function(req,res)
    {
    res.render("signup",{nav})
   
    })

 return signupRoutes
}
module.exports= router;
