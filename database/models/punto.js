module.exports = (sequelize, DataTypes) => {
  const Punto = sequelize.define('Punto', {
    id_punto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    consecutivo: {
      type: DataTypes.STRING, allowNull: false, references: {
        model: {
          tableName: 'Consejo'
        },
        key: 'consecutivo'
      }
    },
    asunto: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Punto.associate = function (models) {
    // associations can be defined here
  };
  return Punto;
};