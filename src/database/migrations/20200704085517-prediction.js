import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'prediction',
  columns: {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    transit_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    travel_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'travel',
        key: 'id',
      },
    },
    day_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'day',
        key: 'id',
      },
    },
    time: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    like_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    dislike_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    is_user_input: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
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
  timestamps: 1,
};

export default new Migration(table);
