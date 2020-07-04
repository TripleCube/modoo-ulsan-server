import { DataTypes, Model } from 'sequelize';

export default class Permission extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        sectionId: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'section_id',
        },
        type: {
          type: DataTypes.CHAR(1),
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
    this.belongsTo(models.Section, {
      foreignKey: 'sectionId',
      as: 'section',
    });
    this.belongsToMany(models.Role, {
      through: 'RolePermission',
      foreignKey: 'permissionId',
      as: 'roles',
    });
  }
}
