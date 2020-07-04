import { DataTypes, Model } from 'sequelize';

export default class Bookmark extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'member_id',
        },
        stopId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'stop_id',
        },
        transitId: {
          type: DataTypes.INTEGER.UNSIGNED,
          field: 'transit_id',
        },
      },
      {
        sequelize,
        tableName: 'bookmark',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      as: 'member',
    });
    this.belongsTo(models.Stop, {
      foreignKey: 'stopId',
      as: 'stop',
    });
    this.belongsTo(models.Transit, {
      foreignKey: 'transitId',
      as: 'transit',
    });
  }
}
