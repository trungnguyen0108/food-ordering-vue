const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

const HOST = '0.0.0.0'
const PORT = 5500

const route = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

route(app)

app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`)
})
