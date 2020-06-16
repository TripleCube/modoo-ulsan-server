import { Model, DataTypes } from 'sequelize';

export default class Role extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'role',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Member, {
      foreignKey: 'roleId',
      targetKey: 'id',
    });
    this.belongsToMany(models.Permission, {
      through: 'RolePermission',
      foreignKey: 'roleId',
      targetKey: 'id',
    });
  }
}
