import { DataTypes, Model } from 'sequelize';

export default class TmoneyStore extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.GEOMETRY('POINT', 4326),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'tmoney_store',
      },
    );
  }
}
