module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Consejo', {
      consecutivo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_tipo_sesion: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tipo_Sesion',
          },
          key: 'id_tipo_sesion'
        }
      },
      institucion: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Instituto Tecnológico de Costa Rica"
      },
      escuela: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Ingeniería en Computación - San José"
      },
      nombre_consejo: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Consejo de Unidad Desconcentrada"
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      hora: {
        allowNull: false,
        type: Sequelize.TIME
      },
      lugar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Consejo');
  }
};