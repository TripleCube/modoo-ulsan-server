import { DataTypes, Model } from 'sequelize';

export default class Route extends Model {
  static init(sequelize) {
    super.init(
      {
        transitId: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          field: 'transit_id',
        },
        sequence: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
        },
        stopId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'stop_id',
        },
      },
      {
        sequelize,
        tableName: 'route',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Transit, {
      foreignKey: 'transitId',
      as: 'transit',
    });
    this.belongsTo(models.Stop, {
      foreignKey: 'stopId',
      as: 'stop',
    });
  }
}
