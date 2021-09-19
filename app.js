var express = require('express');
var app = express();
var fs = require("fs");
app.use(express.json());

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/send-card", (req, res)=>{
  const data = JSON.parse(fs.readFileSync("public/db/cards.json"));
  data.cards.push(req.body);
  fs.writeFileSync("public/db/cards.json", JSON.stringify(data));
  res.send(data);
})

app.get("/scan-image", (req, res) => {
  const fileName = "public/images/test2.jpg"
  console.log(fileName);

  // Imports the Google Cloud client library
  // export GOOGLE_APPLICATION_CREDENTIALS="/home/bill/Documents/htnweb/google-cloud-key.json"
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  const promise = client.documentTextDetection(fileName)
  promise.then(result => {
    console.log(result[0].fullTextAnnotation);
    res.send(result[0].fullTextAnnotation)
}, error => console.log(error))
})

app.use(express.static('public'));

