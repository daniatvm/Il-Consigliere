const db = require('../../database/models');

class AttendantController {

  static async getByCouncil(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const convocados = await db.Convocado.findAll({ attributes: ['cedula'], where: { consecutivo: req.params.consecutivo } });
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

  static async getUserNames(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const convocados = await db.sequelize.query(`SELECT "Usuario"."nombre", "Usuario"."apellido", "Usuario"."id_tipo_convocado" FROM public."Usuario" INNER JOIN public."Convocado" ON "Usuario"."cedula" = "Convocado"."cedula" WHERE "Convocado"."consecutivo" = '${req.params.consecutivo}'`);
        if (convocados[0].length > 0) {
          res.json({
            success: true,
            convocados: convocados[0]
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

  static async getByUser(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const convocados = await db.Convocado.findAll({ where: { cedula: req.params.cedula } });
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
    try {
      await db.sequelize.transaction(async t => {
        const { consecutivo, convocados, limite_solicitud } = req.body;
        for (let i = 0; i < convocados.length; i++) {
          await db.Convocado.create({ cedula: convocados[i].cedula, consecutivo: consecutivo, limite_solicitud: limite_solicitud });
        }
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
        await db.Convocado.destroy({ where: { consecutivo: req.params.consecutivo } });
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
        for (let i = 0; i < req.body.noConvocados.length; i++) {
          let cedula = req.body.noConvocados[i];
          await db.Convocado.destroy({ where: { cedula: cedula, consecutivo: req.params.consecutivo } });
        }
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