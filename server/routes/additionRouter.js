const router = require('express').Router();
const additionCtrl = require('../controllers/additionCtrl');

router.post('/', additionCtrl.toAdd);

module.exports = router;
