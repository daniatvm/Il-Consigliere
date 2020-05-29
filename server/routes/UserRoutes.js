const { Router } = require('express');
const { getUsers } = require('../controllers/UserController');

const router = Router();

router.get('/', getUsers);

module.exports = router;