import { DataTypes, Model } from 'sequelize';

export default class TravelTime extends Model {
  static init(sequelize) {
    super.init(
      {
        travelId: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          field: 'travel_id',
        },
        dayId: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
          field: 'day_id',
        },
        time: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
        },
        sourceCount: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'source_count',
        },
      },
      {
        sequelize,
        tableName: 'travel_time',
        timestamps: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Travel, {
      foreignKey: 'travelId',
      as: 'travel',
    });
    this.belongsTo(models.Day, {
      foreignKey: 'dayId',
      as: 'day',
    });
  }
}
