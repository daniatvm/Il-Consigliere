module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Punto', {
      id_punto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      consecutivo: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Consejo',
          },
          key: 'consecutivo'
        }
      },
      asunto: {
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
    return queryInterface.dropTable('Punto');
  }
};