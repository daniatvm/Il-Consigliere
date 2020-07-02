const db = require('../../database/models');

class AttendantController {

    static async getByCouncil(req,res){
        try {
            await db.sequelize.transaction(async t => {
                const convocados = await db.Convocado.findAll({ where: { consecutivo: req.params.consecutivo } });
                if (convocados.length > 0) {
                    res.json({
                        success: true,
                        convocados: convocados
                    });
                } else {
                    res.json({
                        success: false,
                        msg: 'No se encontraron convocados.'
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async getByUser(req,res){
        try {
            await db.sequelize.transaction(async t => {
                const convocados = await db.Convocado.findAll({ attributes: ['consecutivo','id_tipo_convocado'], where: { cedula: req.params.cedula } });
                if (convocados.length > 0) {
                    //for y recuperar los consejos
                    res.json({
                        success: true,
                        convocados: convocados
                    });
                } else {
                    res.json({
                        success: false,
                        msg: 'No se encontraron convocados.'
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
        const { consecutivo, cedula, id_tipo_convocado } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                await db.Convocado.create({ cedula: cedula, consecutivo: consecutivo, id_tipo_convocado: id_tipo_convocado });
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
                await db.Convocado.destroy({ where: { cedula: req.params.cedula, consecutivo: req.params.consecutivo } });
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

module.exports = AttendantController;