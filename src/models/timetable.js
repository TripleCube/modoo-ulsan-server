import { DataTypes, Model } from 'sequelize';

export default class Timetable extends Model {
  static init(sequelize) {
    super.init(
      {
        transitId: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          field: 'transit_id',
        },
        dayId: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
          field: 'day_id',
        },
        sequence: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
        },
        time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'timetable',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Transit, {
      foreignKey: 'transitId',
      as: 'transit',
    });
    this.belongsTo(models.Day, {
      foreignKey: 'dayId',
      as: 'day',
    });
  }
}
