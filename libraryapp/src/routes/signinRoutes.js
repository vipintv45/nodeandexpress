const express= require('express')
const signinRoutes = express.Router();

function router(nav)
{
signinRoutes.get('/',function(req,res)
    {
    res.render("signin",{nav})
   
    })

 return signinRoutes
}
module.exports= router;


