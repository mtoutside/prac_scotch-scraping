// Require dependencies
const logger = require('morgan');
const express = require('express');

// express application
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(logger('dev'));

// start the server
app.listen(port, () => console.log(`App started on port ${port}.`));


