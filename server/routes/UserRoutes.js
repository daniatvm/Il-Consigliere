const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', UserController.getUsers.bind(UserController));
router.post('/', UserController.store.bind(UserController));
router.post('/inicio_sesion', UserController.authenticate.bind(UserController));
router.post('/cambiar_clave/:cedula', UserController.change_password.bind(UserController));
router.get('/:cedula', UserController.getUser.bind(UserController));
router.delete('/:cedula', UserController.remove.bind(UserController));
router.put('/:cedula', UserController.update.bind(UserController));

module.exports = router;