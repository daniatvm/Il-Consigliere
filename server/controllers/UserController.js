const db = require('../../database/models');
const bcrypt = require('bcrypt');

class UserController {

    static async getUsers(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                const users = await db.Usuario.findAll({
                    attributes: ['cedula', 'nombre', 'apellido']
                });
                if (users.length > 0) {
                    res.status(200).send(users);
                } else {
                    res.status(200).json({
                        msg: 'No se encontraron usuarios.'
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    static async store(req, res) {
        const { cedula, nombre, apellido, clave } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                const encryptedPass = await this.encryptPassword(clave);
                await db.Usuario.create({ cedula: cedula, nombre: nombre, apellido: apellido, clave: encryptedPass });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async authenticate(req, res) {
        const { cedula, clave } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                const user = await db.Usuario.findOne({ where: { cedula: cedula } });
                if (user) {
                    const match = await bcrypt.compare(clave, user.clave);
                    if (match) {
                        res.status(200).send('success');
                    } else {
                        res.status(406).json({
                            msg: 'Credenciales Incorrectos.'
                        });
                    }
                } else {
                    res.status(406).json({
                        msg: 'Usuario no existe.'
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async change_password(req, res) {
        const { clave } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                const encryptedPass = await this.encryptPassword(clave);
                await db.Usuario.update({ clave: encryptedPass }, { where: { cedula: req.params.cedula } });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async getUser(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                const user = await db.Usuario.findOne({
                    attributes: ['cedula', 'nombre', 'apellido'],
                    where: { cedula: req.params.cedula }
                });
                if (user) {
                    res.status(200).send(user);
                } else {
                    res.status(200).json({
                        msg: 'No se encontró el usuario.'
                    });
                }
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async remove(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                await db.Usuario.destroy({ where: { cedula: req.params.cedula } });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async update(req, res) {
        const { cedula, nombre, apellido } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                await db.Usuario.update({ cedula: cedula, nombre: nombre, apellido: apellido }, { where: { cedula: req.params.cedula } });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }
}

module.exports = UserController;