import { DataTypes, Model } from 'sequelize';

export default class Transit extends Model {
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
        startStopId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'start_stop_id',
        },
        endStopId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'end_stop_id',
        },
      },
      {
        sequelize,
        tableName: 'transit',
        timestamps: true,
        paranoid: true,
        createdAt: false,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Stop, {
      foreignKey: 'startStopId',
      as: 'startStop',
    });
    this.belongsTo(models.Stop, {
      foreignKey: 'endStopId',
      as: 'endStop',
    });
    this.belongsToMany(models.Travel, {
      through: 'TransitTravel',
      foreignKey: 'transitId',
      as: 'travels',
    });
    this.hasMany(models.Route, {
      foreignKey: 'transitId',
      as: 'routes',
    });
  }
}
