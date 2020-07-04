import { DataTypes, Model } from 'sequelize';

export default class Travel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        originStopId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'origin_stop_id',
        },
        destinationStopId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'destination_stop_id',
        },
        distance: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'travel',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Stop, {
      foreignKey: 'originStopId',
      as: 'originStop',
    });
    this.belongsTo(models.Stop, {
      foreignKey: 'destinationStopId',
      as: 'destinationStop',
    });
    this.belongsToMany(models.Transit, {
      through: 'TransitTravel',
      foreignKey: 'travelId',
      as: 'vehicles',
    });
  }
}
