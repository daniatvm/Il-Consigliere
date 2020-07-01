module.exports = (sequelize, DataTypes) => {
  const Archivo_Punto_Votativo = sequelize.define('Archivo_Punto_Votativo', {
    id_archivo_punto_votativo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_punto_votativo: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Punto_Votativo'
        },
        key: 'id_punto_votativo'
      }
    },
    direccion: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Archivo_Punto_Votativo.associate = function (models) {
    // associations can be defined here
  };
  return Archivo_Punto_Votativo;
};