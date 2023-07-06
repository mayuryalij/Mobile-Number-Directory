
var express = require('express');
var app = express();
const fs = require('fs');
const dotenv = require('dotenv');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')   
});

const checkValidation = (request, response, next) => {
  let errorFound;
  if(request.body.name.length==0){
    errorFound="Name required to insert data";
  }else if(request.body.address.length==0){
    errorFound="Address required to insert data";
  }else if(request.body.ph_number.length < 10){
    errorFound="Phone Number should contains atleast 10 digits.";
  }
  if (errorFound) {
      response.status(500).send(errorFound);
  } else {
    next()
  }
}

app.post('/add',checkValidation, (req, res) => {  
  let formData=JSON.stringify(req.body);
  fs.appendFile('test.json',formData).then(()=>{
    res.status(200).send({msg:"Data Added Successfully"})
  }).catch((err)=>{
    res.status(500).send(err)
  })
})

app.get('/all', (req, res) => {  
  fs.readFile('test.json', function(err, data) {
    if (!err) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    } else {
      console.log('error');   
    }
  });
})
dotenv.config();

const PORT = 8000;
app.listen(PORT, function () {
    console.log('Node server is running on port : ',PORT);
});


