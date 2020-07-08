const { Router } = require('express');
const DiscussionController = require('../controllers/DiscussionController');

const router = Router();

router.post('/', DiscussionController.store);
router.get('/por_consejo/:consecutivo', DiscussionController.getByCouncil);
router.get('/solicitud/:cedula/:consecutivo', DiscussionController.getByUser);
router.put('/:id_punto', DiscussionController.update);
router.delete('/:id_punto', DiscussionController.remove);
router.delete('/por_consejo/:consecutivo', DiscussionController.removeByCouncil);

module.exports = router;