import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'transit',
  columns: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    division: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    direction: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_stop_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stop',
        key: 'id',
      },
    },
    end_stop_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stop',
        key: 'id',
      },
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
};

export default new Migration(table);
