// server.js

// init project
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/app/index.html');
});

app.get("/*", (req, res) => {
  
  let unix = '';
  let natural = '';
  
  res.json({ 
    'unix': unix,
    'natural': natural
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
