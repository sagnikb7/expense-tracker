const { NODE_ENV } = process.env;
require('dotenv').config({ path: `${__dirname}/${NODE_ENV}.env` });

const app = require('./src/app');
const config = require('./src/config/app');

const logger = require('./src/core/logger')('server');

app.listen(config.NODE_PORT, () => {
  logger.info(`server started on PORT:${config.NODE_PORT}`);
});
