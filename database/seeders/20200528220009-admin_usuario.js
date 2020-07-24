module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [{
      cedula: '117200790',
      nombre: 'Daniela',
      apellido: 'Campos',
      segundo_apellido: 'Alfaro',
      clave: '$2b$10$UNirhtnN73DPD75jYoh11edJ4HIrxm1GhB8I.bWI2vrBAdDUmWqzC',
      id_tipo_convocado: 3
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', null, {});
  }
};
