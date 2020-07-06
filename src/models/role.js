import { DataTypes, Model } from 'sequelize';

export default class Role extends Model {
  static init(sequelize) {
    super.init(
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
    this.belongsToMany(models.Permission, {
      through: 'RolePermission',
      foreignKey: 'roleId',
      as: 'permissions',
    });
    this.hasMany(models.Member, {
      foreignKey: 'roleId',
      as: 'members',
    });
    this.hasMany(models.Board, {
      foreignKey: 'roleId',
      as: 'boards',
    });
    this.hasMany(models.Post, {
      foreignKey: 'roleId',
      as: 'posts',
    });
  }
}
