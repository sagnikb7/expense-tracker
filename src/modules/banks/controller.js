const CONSTANTS = require('../../constants/app');
const bankService = require('./service');

const controller = {};

controller.getBanks = (req, res, next) => {
  try {
    const data = bankService.getBanks();
    return res.status(200).json({ status: CONSTANTS.apiStatus.SUCCESS, data, error: null });
  } catch (error) {
    next(error);
  }
  return 0;
};

controller.addBank = (req, res, next) => {
  try {
    const { name, account, isActive } = req.body;
    const newBank = { name, account, isActive };
    const data = bankService.addBank(newBank);
    return res.status(200).json({ status: CONSTANTS.apiStatus.SUCCESS, data, error: null });
  } catch (error) {
    next(error);
  }
  return 0;
};

module.exports = controller;
