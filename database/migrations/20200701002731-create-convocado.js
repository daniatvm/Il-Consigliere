module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Convocado', {
      id_convocado: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_consejo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Consejo',
          },
          key: 'id_consejo'
        }
      },
      cedula: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Usuario',
          },
          key: 'cedula'
        }
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