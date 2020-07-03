module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tipo_Sesion', [{
      descripcion: 'ordinaria'
    },
    {
      descripcion: 'extraordinaria'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tipo_Sesion', null, {});
  }
};
