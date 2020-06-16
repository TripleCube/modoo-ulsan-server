import { Model, DataTypes } from 'sequelize';

export default class Permission extends Model {
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
        tableName: 'permission',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Role, {
      through: 'RolePermission',
      foreignKey: 'permissionId',
      targetKey: 'id',
    });
  }
}
