module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuario', {
      cedula: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      clave: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Usuario');
  }
};