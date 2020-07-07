const { Router } = require('express');
const AttendantController = require('../controllers/AttendantController');

const router = Router();

router.post('/', AttendantController.store);
router.get('/por_consejo/:consecutivo', AttendantController.getByCouncil);
router.get('/nombres_usuario/:consecutivo', AttendantController.getUserNames);
router.get('/por_usuario/:cedula', AttendantController.getByUser);
router.delete('/por_consejo/:consecutivo', AttendantController.removeByCouncil);
router.delete('/:consecutivo', AttendantController.remove);

module.exports = router;