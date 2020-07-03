module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tipo_Convocado', [{
      descripcion: 'estudiante'
    },
    {
      descripcion: 'docente'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tipo_Convocado', null, {});
  }
};
