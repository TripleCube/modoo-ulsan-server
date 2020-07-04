import { DataTypes, Model } from 'sequelize';

export default class Day extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'day',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Timetable, {
      foreignKey: 'dayId',
      as: 'timetables',
    });
    this.hasMany(models.TravelTime, {
      foreignKey: 'dayId',
      as: 'travelTimes',
    });
    this.hasMany(models.Prediction, {
      foreignKey: 'dayId',
      as: 'predictions',
    });
  }
}
