// server.js

// init project
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
bodyParser.urlencoded({ extended: false })

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/app/index.html');
});

app.get("/*", (req, res) => {
  let unix = null;
  let natural = null;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dateReg = new RegExp(/(January|February|March|April|May|June?|July|August|September|October|November|December)\s(\d\d?),\s+?(\d\d\d\d)/, 'g');
  const unixReg = new RegExp(/[0-2]\d\d\d\d\d\d\d\d\d/,'g');
  if(dateReg.test(req.params[0])) {
    natural = req.params[0];
    unix = Math.floor(new Date(req.params[0]).getTime())/1000
  } else if(unixReg.test(req.params[0])) {
    unix = req.params[0];
    console.log(req.params[0]);
    const date = new Date(parseInt(unix+'000'));
    natural = `${months[date.getMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`
  }
  
  res.json({ 
    'unix': unix,
    'natural': natural
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
