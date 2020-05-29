module.exports = (sequelize, DataTypes) => {
  const Permiso = sequelize.define('Permiso', {
    id_permiso: { type:DataTypes.INTEGER, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Permiso.associate = function(models) {
    Permiso.belongsToMany(models.Usuario, {
      through: models.Usuario_Permiso
    });
  };
  return Permiso;
};