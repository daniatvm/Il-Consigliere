module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tipo_Punto', [{
      descripcion: 'informativo'
    },
    {
      descripcion: 'votativo'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tipo_Punto', null, {});
  }
};
