module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permiso', [{
      nombre: 'gestionarUsuarios'
    },
    {
      nombre: 'gestionarConsejos'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permiso', null, {});
  }
};
