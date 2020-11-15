const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 2020;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align:center">Hello World</h1>');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
