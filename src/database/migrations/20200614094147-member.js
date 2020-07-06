import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'member',
  columns: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.GEOMETRY('POINT', 4326),
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    daily_limit: {
      type: DataTypes.TINYINT.UNSIGNED,
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
  },
  timestamps: 3,
};

export default new Migration(table);
