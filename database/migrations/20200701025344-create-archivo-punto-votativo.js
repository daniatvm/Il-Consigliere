module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Archivo_Punto_Votativo', {
      id_archivo_punto_votativo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_punto_votativo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Punto_Votativo',
          },
          key: 'id_punto_votativo'
        }
      },
      direccion: {
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
    return queryInterface.dropTable('Archivo_Punto_Votativo');
  }
};