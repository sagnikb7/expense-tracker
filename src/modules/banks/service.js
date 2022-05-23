const service = {};

const banks = [{
  id: 1, name: 'HDFC', account: 1234, isActive: true,
}];

service.getBanks = () => banks;

service.addBank = (bank) => {
  const id = banks.length + 1;
  banks.push({ id, ...bank });
  return banks;
};

module.exports = service;
