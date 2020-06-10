const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', UserController.getUsers.bind(UserController));
router.post('/', UserController.store.bind(UserController));
router.post('/inicio_sesion', UserController.authenticate.bind(UserController));
router.post('/cambiar_clave/:cedula', UserController.changePassword.bind(UserController));
router.get('/:cedula', UserController.getUser.bind(UserController));
router.delete('/:cedula', UserController.remove.bind(UserController));
router.put('/:cedula', UserController.update.bind(UserController));
router.post('/verificar_token', UserController.verifyToken.bind(UserController));
router.get('/permisos/:cedula', UserController.roles.bind(UserController));
router.post('/verificar_clave', UserController.verifyPassword.bind(UserController));

module.exports = router;
