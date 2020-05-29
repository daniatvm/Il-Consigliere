module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [{
      cedula: '117200790',
      nombre: 'Daniela',
      apellido: 'Campos',
      clave: 'hola123'
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', null, {});
  }
};
