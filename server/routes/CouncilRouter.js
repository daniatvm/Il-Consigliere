const { Router } = require('express');
const CouncilController = require('../controllers/CouncilController');

const router = Router();

router.post('/', CouncilController.store);
router.get('/', CouncilController.getCouncils);
router.get('/:consecutivo', CouncilController.getCouncil);
router.put('/:consecutivo', CouncilController.update);
router.delete('/:consecutivo', CouncilController.remove);

module.exports = router;