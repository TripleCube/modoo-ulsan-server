import { DataTypes, Model } from 'sequelize';

export default class Stop extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        number: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        location: {
          type: DataTypes.GEOMETRY('POINT', 4326),
          allowNull: false,
        },
        remark: {
          type: DataTypes.STRING,
        },
        isLimousineBusStop: {
          type: DataTypes.BOOLEAN,
          field: 'is_limousine_bus_stop',
        },
      },
      {
        sequelize,
        tableName: 'stop',
        timestamps: true,
        paranoid: true,
        createdAt: false,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Travel, {
      foreignKey: 'originStopId',
      as: 'travelOrigins',
    });
    this.hasMany(models.Travel, {
      foreignKey: 'destinationStopId',
      as: 'travelDestinations',
    });
    this.hasMany(models.Transit, {
      foreignKey: 'startStopId',
      as: 'transitStarts',
    });
    this.hasMany(models.Transit, {
      foreignKey: 'endStopId',
      as: 'transitEnds',
    });
    this.hasMany(models.Route, {
      foreignKey: 'stopId',
      as: 'routes',
    });
    this.hasMany(models.Bookmark, {
      foreignKey: 'stopId',
      as: 'bookmarks',
    });
  }
}
