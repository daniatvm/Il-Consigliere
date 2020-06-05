module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [{
      cedula: '117200790',
      nombre: 'Daniela',
      apellido: 'Campos',
      clave: '$2b$10$UNirhtnN73DPD75jYoh11edJ4HIrxm1GhB8I.bWI2vrBAdDUmWqzC'
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', null, {});
  }
};
