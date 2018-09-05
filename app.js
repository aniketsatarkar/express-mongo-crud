const express    = require('express');
const bodyParser = require('body-parser');

// initialize express app instance >>>
const app = express();

let port = 1234;

app.listen(port, () => {
  console.log('server is listening at port : ' + port);
});
