module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tipo_Punto', [{
      descripcion: 'Informativo'
    },
    {
      descripcion: 'Votativo'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tipo_Punto', null, {});
  }
};
