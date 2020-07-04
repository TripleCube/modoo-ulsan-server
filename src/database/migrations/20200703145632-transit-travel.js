import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'transit_travel',
  columns: {
    transit_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'transit',
        key: 'id',
      },
    },
    travel_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'travel',
        key: 'id',
      },
    },
  },
};

export default new Migration(table);
