const db = require('../../database/models');

class CouncilController {

  static async getCouncils(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const councils = await db.Consejo.findAll();
        if (councils.length > 0) {
          res.json({
            success: true,
            councils: councils
          });
        } else {
          res.json({
            success: false,
            msg: 'No se encontraron consejos.'
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
    const { consecutivo, id_tipo_sesion, fecha, hora, lugar, puntos, cedula, id_tipo_punto } = req.body;
    try {
      await db.sequelize.transaction(async t => {
        await db.Consejo.create({
          consecutivo: consecutivo, id_tipo_sesion: id_tipo_sesion,
          fecha: fecha, hora: hora, lugar: lugar
        });
        for (let i = 0; i < puntos.length; i++) {
          await db.Punto.create({
            asunto: puntos[i], consecutivo: consecutivo, cedula: cedula, id_tipo_punto: id_tipo_punto
          });
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

  static async getCouncil(req, res) {
    try {
      await db.sequelize.transaction(async t => {
        const council = await db.Consejo.findOne({
          where: { consecutivo: req.params.consecutivo }
        });
        if (council) {
          res.json({
            success: true,
            council: council
          });
        } else {
          res.json({
            success: false,
            msg: 'No se encontró el usuario.'
          });
        }
      })
    } catch (error) {
      res.status(500).json({
        msg: 'Error interno del servidor.',
      });
    }
  }

  static async update(req, res) {
    const { consecutivo, id_tipo_sesion, fecha, hora, lugar } = req.body;
    try {
      await db.sequelize.transaction(async t => {
        await db.Council.update({
          consecutivo: consecutivo, id_tipo_sesion: id_tipo_sesion,
          fecha: fecha, hora: hora, lugar: lugar
        }, { where: { consecutivo: req.params.consecutivo } });
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
        await db.Consejo.destroy({ where: { consecutivo: req.params.consecutivo } });
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

module.exports = CouncilController;