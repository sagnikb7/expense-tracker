const router = require('express').Router({
  caseSensitive: true,
  strict: true,
});
const { validateBody } = require('../../middlewares/validator');
const bankController = require('./controller');
const { addBankSchema } = require('./validation');

router.get('/', bankController.getBanks);
router.post('/', validateBody(addBankSchema), bankController.addBank);

module.exports = router;
