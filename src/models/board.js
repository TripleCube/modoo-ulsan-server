import { DataTypes, Model } from 'sequelize';

export default class Board extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        keyword: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        sortOrder: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'sort_order',
        },
        roleId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'role_id',
        },
        parentId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          field: 'parent_id',
        },
      },
      {
        sequelize,
        tableName: 'board',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'role',
    });
    this.belongsTo(models.Board, {
      foreignKey: 'parentId',
      as: 'board',
    });
    this.hasMany(models.Board, {
      foreignKey: 'parentId',
      as: 'boards',
    });
    this.hasMany(models.Category, {
      foreignKey: 'boardId',
      as: 'categories',
    });
    this.hasMany(models.Post, {
      foreignKey: 'boardId',
      as: 'posts',
    });
    this.hasMany(models.PopularContent, {
      foreignKey: 'boardId',
      as: 'popularContent',
    });
  }
}
