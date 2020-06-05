const db = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
                        const info = {
                            cedula: user.cedula,
                            nombre: user.nombre,
                            apellido: user.apellido
                        }
                        const token = jwt.sign({ user: info }, process.env.KEY, { algorithm: 'HS512' });
                        res.json({
                            success: true,
                            token: token,
                            info: info
                        });
                    } else {
                        res.json({
                            success: false,
                            msg: 'Credenciales Incorrectos.'
                        });
                    }
                } else {
                    res.json({
                        success: false,
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

    static async changePassword(req, res) {
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

    static verifyToken(req, res) {
        const bearerHeader = req.headers['authorization'];
        let token = '';
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            token = bearer[1];
            try {
                let decoded = jwt.verify(token, process.env.KEY, { algorithm: 'HS512' });
                res.json({
                    success: true,
                    token: decoded
                })
            } catch (err) {
                res.json({
                    success: false,
                    msg: "Token corrupto."
                });
            }
        } else {
            res.json({
                success: false,
                msg: "No ha iniciado sesión."
            });
        }
    }

    static async roles(req, res) {
        try {
            db.sequelize.transaction(async t => {
                const roles = await db.Usuario_Permiso.findAll({ where: { cedula: req.params.cedula } });
                if (roles.length > 0) {
                    res.send(roles);
                } else {
                    res.json({
                        msg: 'No tiene permisos asociados.'
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }
}

module.exports = UserController;
