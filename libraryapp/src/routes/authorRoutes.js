const express= require('express')
const authorRouter= express.Router();

function router(nav){
    author=
    [
        {name:'Susan Orlean',
        data:'Susan Orlean is a journalist and bestselling author of The Orchid Thief and The Library Book. She has been a staff writer for The New Yorker since 1992, and has contributed articles to many magazines including Vogue, Rolling Stone, Esquire, and Outside.',
        img:'/images/susanorlean.jpg'
        },
        {name:'John Edward Laroche',
        data:'John Edward Laroche is an American horticulturist who was arrested for poaching wild ghost orchids while working for the Seminole natives in the Fakahatchee Strand State Preserve in Florida.',
        img:'/images/johnlaroche.jpg'
        },
        {name:'Charles Stuart Kaufman',
        data:'Charles Stuart Kaufman is an American screenwriter, producer, director and novelist. He wrote the films Being John Malkovich, Adaptation, and Eternal Sunshine of the Spotless Mind. He made his directorial debut with Synecdoche, New York, which film critic Roger Ebert called "the best movie of the decade" in 2009',
        img:'/images/charliekaufman.jpg'
        },
       
    ]
authorRouter.get('/',function(req,res){
    
    res.render("author",{nav,author});
})

authorRouter.get('/:id',function(req,res){
    const id=req.params.id;

    res.render("sinauthor",{nav,sinauthor:author[id]})
})
return authorRouter
}
module.exports = router