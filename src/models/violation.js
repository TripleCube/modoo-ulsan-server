import { DataTypes, Model } from 'sequelize';

export default class Violation extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        period: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'violation',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Restriction, {
      foreignKey: 'violationId',
      as: 'restrictions',
    });
    this.hasMany(models.Report, {
      foreignKey: 'violationId',
      as: 'reports',
    });
  }
}
