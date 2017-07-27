const express = require('express');
const bodyParser = require('body-parser');
const kmeans = require('kmeans-node');
const _ = require('lodash');
var geocluster = require("geocluster");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is listening on port 3001');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/cluster', (req, res) => {
  let coors = req.body.data.map((photo) => {
    return [Number(photo.latitude), Number(photo.longitude), photo]
  })
  let data2 = geocluster(coors, 0.1);
  res.status(200).send(data2)
});



// app.post('/cluster', (req, res) => {
//   const array = req.body.data, means = req.body.means;
//   var mapArrToObj = _.map(array, item => {
//     return {
//       x: item.latitude,
//       y: item.longitude,
//       data: item
//     }
//   });
//   var object = kmeans.object(mapArrToObj, means);
//   res.send([object]);
// });