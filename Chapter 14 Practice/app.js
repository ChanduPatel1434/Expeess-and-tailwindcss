const express = require('express');
const path = require('path');

//local modules
const hostRouter = require('./routes/hostRouter');
const storeRouter = require('./routes/storeRouter')
const contactRouter = require('./routes/contactRouter');
const error = require('./controller/homeController')



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded());
app.use( hostRouter);
app.use(storeRouter);
app.use(contactRouter);


app.use(error.page404);


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

})