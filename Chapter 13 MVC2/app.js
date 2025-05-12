const express = require('express');
const path = require('path');



//local modules
const hostRouter = require('./routes/hostRouter');
const contactRouter = require('./routes/contactRouter');
const storeRouter = require('./routes/storeRouter');
const homesController = require("./controller/hostControler");


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public/css')));


app.use(express.urlencoded());
app.use(hostRouter);
app.use(storeRouter);
app.use(contactRouter)
// app.use(homesController.page404);

const PORT = 4004;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

})