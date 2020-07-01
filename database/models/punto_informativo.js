module.exports = (sequelize, DataTypes) => {
  const Punto_Informativo = sequelize.define('Punto_Informativo', {
    id_punto_informativo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_consejo: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Consejo'
        },
        key: 'id_consejo'
      }
    },
    asunto: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Punto_Informativo.associate = function (models) {
    // associations can be defined here
  };
  return Punto_Informativo;
};