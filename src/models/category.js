import { DataTypes, Model } from 'sequelize';

export default class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
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
        boardId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'board_id',
        },
      },
      {
        sequelize,
        tableName: 'category',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Board, {
      foreignKey: 'boardId',
      as: 'board',
    });
    this.hasMany(models.Post, {
      foreignKey: 'categoryId',
      as: 'posts',
    });
  }
}
