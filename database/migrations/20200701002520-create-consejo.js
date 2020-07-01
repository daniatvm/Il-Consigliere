module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Consejo', {
      id_consejo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.STRING
      },
      escuela: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre_consejo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      consecutivo: {
        allowNull: false,
        type: Sequelize.STRING
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