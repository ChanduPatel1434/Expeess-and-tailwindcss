const express =require('express');

const app = express();


//  app.use ( (req,res,next)=>{
//   console.log ("Frist middlewarre is running ",req.url, req.method)
//   res.send(`<h1>"Hello this is frist middleware"</h1>`);
          


// });

app.get('/about', (req, res, next)=>{
  console.log ("Second middlewarre is running ",req.url, req.method)
  res.send('<h2>"Hi there this is second middleware have fun"</h2>')
  

});

app.get('/contact',(req, res ,next)=>{
  console.log("this is contact get method running  ", req.url, req.method);
  res.send(`<h2> Fill your conact information here</h2>
    <form action="/contact" method="POST">
    <input type="text" name="name" placeholder="Enter your name" required>
    <input type="email" name="email" placeholder="Enter your email" required>
    <button type="submit">Submit</button>`)

});

app.post('/contact', (req, res, next)=>{
  console.log(" this is contact post method running ", req.url, req.method);
  res.send(`<h1> We will Contact you with in short time and thankyou 😊</h1>`)
})


const PORT = 4000;
app.listen (PORT , ()=>{
  console.log(`Server is Running on port http://localhost:${PORT}`);
})