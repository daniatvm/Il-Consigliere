module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario_Permiso', [{
      cedula: '117200790',
      id_permiso: 1
    },
    {
      cedula: '117200790',
      id_permiso: 2
    },
    {
      cedula: '117200790',
      id_permiso: 3
    },
    {
      cedula: '117200790',
      id_permiso: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario_Permiso', null, {});
  }
};
