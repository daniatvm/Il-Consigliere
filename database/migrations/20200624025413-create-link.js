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
            tableName: 'Permiso'
          },
          key: 'id_permiso'
        }
      },
      id_tipo_convocado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Tipo_Convocado'
          },
          key: 'id_tipo_convocado'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Link');
  }
};