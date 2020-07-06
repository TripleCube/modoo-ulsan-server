import { DataTypes, Model } from 'sequelize';

export default class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        boardId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'board_id',
        },
        categoryId: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'category_id',
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        likeCount: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'like_count',
        },
        dislikeCount: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'dislike_count',
        },
        viewCount: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'view_count',
        },
        commentCount: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'comment_count',
        },
        reportCount: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'report_count',
        },
        isNotice: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'is_notice',
        },
        roleId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'role_id',
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'member_id',
        },
      },
      {
        sequelize,
        tableName: 'post',
        timestamps: true,
        paranoid: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Board, {
      foreignKey: 'boardId',
      as: 'board',
    });
    this.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
    this.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'role',
    });
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      as: 'member',
    });
    this.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
    });
  }
}
