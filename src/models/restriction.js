import { DataTypes, Model } from 'sequelize';

export default class Restriction extends Model {
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
        tableName: 'restriction',
      },
    );
  }

  static associate(models) {}
}
