const express = require('express');
const app = new express();
const nav =[
{link:'/books',name:'books'},
{link:'/author',name:'author'},
{link:'/signin',name:'signin'},
{link:'/signup',name:'signup'}
            ]
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const signinRouter =require('./src/routes/signinRoutes')(nav)
const signupRouter =require('./src/routes/signupRoutes')(nav)


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("index",
    {nav});
})




app.listen(9876);


