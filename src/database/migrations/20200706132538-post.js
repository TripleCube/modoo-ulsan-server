import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'post',
  columns: {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    board_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'board',
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
    view_count: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    comment_count: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    report_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    is_notice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    member_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'member',
        key: 'id',
      },
    },
  },
  timestamps: 3,
};
const indexes = [
  {
    type: 'index',
    tableName: 'post',
    options: {
      fields: ['title', 'content'],
      type: 'fulltext',
      name: 'post_ix_title_content',
    },
  },
];

export default new Migration(table, undefined, indexes);
