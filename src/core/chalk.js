const chalk = require('chalk');

const printRequests = (msg) => chalk.green(msg);
const printErrors = (msg) => chalk.red(msg);

module.exports = { printRequests, printErrors };
