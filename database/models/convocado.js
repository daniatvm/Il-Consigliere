module.exports = (sequelize, DataTypes) => {
  const Convocado = sequelize.define('Convocado', {
    id_convocado: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    id_consejo: {
      type: DataTypes.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Consejo'
        },
        key: 'id_consejo'
      }
    },
    cedula: {
      type: DataTypes.STRING, allowNull: false, references: {
        model: {
          tableName: 'Usuario'
        },
        key: 'cedula'
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
    freezeTableName: true
  });
  Convocado.associate = function (models) {
    // associations can be defined here
  };
  return Convocado;
};