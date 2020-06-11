const { Router } = require('express');
const EmailController = require('../controllers/EmailController');

const router = Router();

router.post('/verificar_correo', EmailController.isEmailTaken);
router.get('/:cedula', EmailController.getEmails);
router.post('/:cedula', EmailController.store);
router.delete('/:cedula', EmailController.remove);

module.exports = router;