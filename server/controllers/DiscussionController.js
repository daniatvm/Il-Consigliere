const db = require('../../database/models');

class DiscussionController {

  static async getDiscussions(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const discussions = await db.Punto.findAll({ attributes: ['id_punto', 'asunto'], where: { consecutivo: req.params.consecutivo, id_tipo_punto: 1 } });
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

  static async getRequests(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const discussions = await db.sequelize.query(`SELECT "Punto"."id_punto", "Punto"."asunto", "Usuario"."nombre", "Usuario"."apellido" FROM public."Punto" INNER JOIN public."Usuario" ON "Punto"."cedula" = "Usuario"."cedula" WHERE "Punto"."consecutivo" = '${req.params.consecutivo}' AND "Punto"."id_tipo_punto" = 2`);
        if (discussions[0].length > 0) {
          res.json({
            success: true,
            discussions: discussions[0]
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

  static async getRequestsByUser(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const discussions = await db.Punto.findAll({ attributes: ['id_punto','asunto'], where: { consecutivo: req.params.consecutivo, cedula: req.params.cedula, id_tipo_punto: 2 } });
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
    const { consecutivo, asunto, id_tipo_punto, cedula } = req.body;
    try {
      await db.sequelize.transaction(async t => {
        await db.Punto.create({
          consecutivo: consecutivo, asunto: asunto, id_tipo_punto: id_tipo_punto, cedula: cedula
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
    const { id_tipo_punto } = req.body;
    try {
      await db.sequelize.transaction(async t => {
        await db.Punto.update({ id_tipo_punto: id_tipo_punto }, { where: { id_punto: req.params.id_punto } });
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

  static async removeByUser(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        await db.Punto.destroy({ where: { cedula: req.params.cedula } });
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