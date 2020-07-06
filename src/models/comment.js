import { DataTypes, Model } from 'sequelize';

export default class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        postId: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          field: 'post_id',
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
        reportCount: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'report_count',
        },
        branch: {
          type: DataTypes.BIGINT.UNSIGNED,
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'member_id',
        },
        parentId: {
          type: DataTypes.BIGINT.UNSIGNED,
          field: 'parent_id',
        },
      },
      {
        sequelize,
        tableName: 'comment',
        timestamps: true,
        paranoid: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post',
    });
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      as: 'member',
    });
    this.belongsTo(models.Comment, {
      foreignKey: 'parentId',
      as: 'comment',
    });
    this.hasMany(models.Comment, {
      foreignKey: 'parentId',
      as: 'comments',
    });
  }
}
