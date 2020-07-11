const { Router } = require('express');
const CouncilController = require('../controllers/CouncilController');
const { get } = require('./DiscussionRouter');

const router = Router();

router.post('/', CouncilController.store);
router.get('/', CouncilController.getCouncils);
router.get('/anteriores', CouncilController.getCouncilsBefore);
router.get('/por_usuario/:cedula/:fecha', CouncilController.getCouncilsByUser);
router.get('/:consecutivo', CouncilController.getCouncil);
router.put('/:consecutivo', CouncilController.update);
router.delete('/:consecutivo', CouncilController.remove);

module.exports = router;