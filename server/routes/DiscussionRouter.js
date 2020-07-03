const { Router } = require('express');
const DiscussionController = require('../controllers/DiscussionController');

const router = Router();

router.post('/', DiscussionController.store);
router.get('/:consecutivo', DiscussionController.getByCouncil);
router.put('/:id_punto', DiscussionController.update);
router.delete('/:id_punto', DiscussionController.remove);
router.delete('/por_consejo/:consecutivo', DiscussionController.removeByCouncil);

module.exports = router;