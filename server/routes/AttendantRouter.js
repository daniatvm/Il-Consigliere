const { Router } = require('express');
const AttendantController = require('../controllers/AttendantController');

const router = Router();

router.post('/', AttendantController.store);
router.get('/por_consejo/:consecutivo', AttendantController.getByCouncil);
router.get('/por_usuario/:cedula', AttendantController.getByUser);
router.delete('/:consecutivo/:cedula', AttendantController.remove);

module.exports = router;