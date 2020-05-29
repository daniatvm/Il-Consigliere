module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    cedula: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    clave: { type: DataTypes.STRING, allowNull: false }
  }, {
    freezeTableName: true
  });
  Usuario.associate = function(models) {
    Usuario.belongsToMany(models.Permiso, {
      through: models.Usuario_Permiso
    });
    Usuario.hasMany(models.Correo);
  };
  return Usuario;
};