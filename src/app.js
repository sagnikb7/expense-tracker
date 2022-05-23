const app = require('express')();

// inject middlewares
require('./middlewares/basic')(app);
require('./middlewares/routes')(app);
require('./middlewares/error')(app);

// exporting app
module.exports = app;
