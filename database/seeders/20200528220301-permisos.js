module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permiso', [{
      nombre: 'registrarUsuario'
    },
    {
      nombre: 'eliminarUsuario'
    },
    {
      nombre: 'editarConsejo'
    },
    {
      nombre: 'editarPuntosAgenda'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permiso', null, {});
  }
};
