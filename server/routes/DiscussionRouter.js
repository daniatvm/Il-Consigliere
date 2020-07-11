const { Router } = require('express');
const DiscussionController = require('../controllers/DiscussionController');

const router = Router();

router.post('/', DiscussionController.store);
router.get('/aprobado/:consecutivo', DiscussionController.getDiscussions);
router.get('/solicitud/:consecutivo', DiscussionController.getRequests);
router.get('/solicitud/:cedula/:consecutivo', DiscussionController.getRequestsByUser);
router.put('/:id_punto', DiscussionController.update);
router.delete('/por_consejo/:consecutivo', DiscussionController.removeByCouncil);
router.delete('/:id_punto', DiscussionController.remove);

module.exports = router;