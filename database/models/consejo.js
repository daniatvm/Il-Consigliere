module.exports = (sequelize, DataTypes) => {
  const Consejo = sequelize.define('Consejo', {
    id_consejo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_tipo_sesion: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Tipo_Sesion'
        },
        key: 'id_tipo_sesion'
      }
    },
    institucion: { type: DataTypes.STRING, allowNull: false },
    escuela: { type: DataTypes.STRING, allowNull: false },
    nombre_consejo: { type: DataTypes.STRING, allowNull: false },
    consecutivo: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATEONLY, allowNull: false },
    hora: { type: DataTypes.TIME, allowNull: false },
    lugar: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Consejo.associate = function (models) {
    // associations can be defined here
  };
  return Consejo;
};