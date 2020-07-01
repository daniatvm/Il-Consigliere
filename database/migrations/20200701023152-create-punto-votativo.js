module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Punto_Votativo', {
      id_punto_votativo: {
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
      asunto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      favor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      contra: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      abstencion: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Punto_Votativo');
  }
};