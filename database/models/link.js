module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    id_link: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
    expiration: { type: DataTypes.BIGINT, allowNull: false },
    id_permiso: {
      type: DataTypes.INTEGER, allowNull: true, references: {
        model: {
          tableName: 'Permiso'
        },
        key: 'id_permiso'
      }
    },
    id_tipo_convocado: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Tipo_Convocado'
        },
        key: 'id_tipo_convocado'
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Link.associate = function (models) { };
  return Link;
};