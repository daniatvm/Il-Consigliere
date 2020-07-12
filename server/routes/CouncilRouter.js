const { Router } = require('express');
const CouncilController = require('../controllers/CouncilController');

const router = Router();

router.post('/', CouncilController.store);
router.get('/', CouncilController.getCouncils);
router.get('/anteriores', CouncilController.getCouncilsBefore);
router.get('/anteriores/convocado/:cedula/:fecha', CouncilController.getCouncilsBeforeAttendant);
router.get('/convocado/:consecutivo/:cedula', CouncilController.getCouncilAttendant);
router.get('/por_usuario/:cedula/:fecha', CouncilController.getCouncilsByUser);
router.get('/:consecutivo', CouncilController.getCouncil);
router.put('/:consecutivo', CouncilController.update);
router.delete('/:consecutivo', CouncilController.remove);

module.exports = router;