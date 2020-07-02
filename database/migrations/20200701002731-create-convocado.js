module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Convocado', {
      id_convocado: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      consecutivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Consejo',
          },
          key: 'consecutivo'
        }
      },
      cedula: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_tipo_convocado: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tipo_Convocado',
          },
          key: 'id_tipo_convocado'
        }
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
    return queryInterface.dropTable('Convocado');
  }
};