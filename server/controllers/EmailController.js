const db = require('../../database/models');

class EmailController {

    static async getEmails(req, res) {
        try {
            await db.sequelize.transaction(async t => {
                const emails = await db.Correo.findAll({ attributes: ['correo'], where: { cedula: req.params.cedula } });
                if (emails.length > 0) {
                    res.status(200).send(emails);
                } else {
                    res.status(200).json({
                        msg: 'No se encontraron correos.'
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
        const { correo } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                await db.Correo.create({ correo: correo, cedula: req.params.cedula });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async remove(req, res) {
        try {
            const { correo } = req.body;
            await db.sequelize.transaction(async t => {
                await db.Correo.destroy({ where: { correo: correo } });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }
}

module.exports = EmailController;