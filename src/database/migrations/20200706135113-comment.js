import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'comment',
  columns: {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    like_count: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    dislike_count: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    report_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    branch: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    member_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'member',
        key: 'id',
      },
    },
    parent_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      references: {
        model: 'comment',
        key: 'id',
      },
    },
  },
  timestamps: 3,
};

export default new Migration(table);
