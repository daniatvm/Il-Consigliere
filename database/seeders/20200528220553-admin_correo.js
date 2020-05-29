module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Correo', [{
      correo: 'daniatvm@gmail.com',
      cedula: '117200790'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Correo', null, {});
  }
};
