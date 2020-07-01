module.exports = (sequelize, DataTypes) => {
  const Punto_Votativo = sequelize.define('Punto_Votativo', {
    id_punto_votativo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_consejo: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Consejo'
        },
        key: 'id_consejo'
      }
    },
    asunto: { type: DataTypes.STRING, allowNull: false },
    favor: { type: DataTypes.INTEGER, allowNull: false },
    contra: { type: DataTypes.INTEGER, allowNull: false },
    abstencion: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    freezeTableName: true
  });
  Punto_Votativo.associate = function (models) {
    // associations can be defined here
  };
  return Punto_Votativo;
};