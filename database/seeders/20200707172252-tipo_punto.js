module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tipo_Punto', [{
      descripcion: 'aceptado'
    },
    {
      descripcion: 'solicitado'
    },
    {
      descripcion: 'rechazado'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tipo_Punto', null, {});
  }
};
