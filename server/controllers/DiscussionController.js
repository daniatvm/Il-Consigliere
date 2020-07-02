const db = require('../../database/models');

class DiscussionController {

    static async getByCouncil(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                const discussions = await db.Punto.findAll({ where: { consecutivo: req.params.consecutivo } });
                if (discussions.length > 0) {
                    res.json({
                        success: true,
                        discussions: discussions
                    });
                } else {
                    res.json({
                        success: false,
                        msg: 'No se encontraron puntos.'
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async store(req, res) {
        const { consecutivo, id_tipo_punto, asunto } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                await db.Punto.create({
                    consecutivo: consecutivo, id_tipo_punto: id_tipo_punto,
                    asunto: asunto
                });
                res.json({
                    success: true
                });
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async update(req, res) {
        const { asunto } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                await db.Punto.update({ asunto: asunto }, { where: { id_punto: req.params.id_punto } });
                res.json({
                    success: true
                });
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async remove(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                await db.Punto.destroy({ where: { id_punto: req.params.id_punto } });
                res.json({
                    success: true
                });
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async removeByCouncil(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                await db.Punto.destroy({ where: { consecutivo: req.params.consecutivo } });
                res.json({
                    success: true
                });
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }
}

module.exports = DiscussionController;