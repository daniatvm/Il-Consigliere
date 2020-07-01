module.exports = (sequelize, DataTypes) => {
  const Archivo_Punto_Informativo = sequelize.define('Archivo_Punto_Informativo', {
    id_archivo_punto_informativo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_punto_informativo: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Punto_Informativo'
        },
        key: 'id_punto_informativo'
      }
    },
    direccion: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Archivo_Punto_Informativo.associate = function (models) {
    // associations can be defined here
  };
  return Archivo_Punto_Informativo;
};