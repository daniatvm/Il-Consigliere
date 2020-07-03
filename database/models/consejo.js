module.exports = (sequelize, DataTypes) => {
  const Consejo = sequelize.define('Consejo', {
    consecutivo: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    id_tipo_sesion: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Tipo_Sesion'
        },
        key: 'id_tipo_sesion'
      }
    },
    institucion: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Instituto Tecnológico de Costa Rica' },
    escuela: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Escuela de Ingeniería en Computación' },
    nombre_consejo: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Consejo de Unidad Desconcentrada' },
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