module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Link', {
      id_link: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiration: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      id_permiso: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Permiso',
          },
          key: 'id_permiso',
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Link');
  }
};