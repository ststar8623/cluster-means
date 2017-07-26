const express = require('express');
const bodyParser = require('body-parser');
const { cluster } = require('./cluster');

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
  const array = req.body.data, means = req.body.means;
  const object = cluster(array, means);
  res.send(object);
});