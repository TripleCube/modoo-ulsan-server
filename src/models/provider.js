import { DataTypes, Model } from 'sequelize';

export default class Provider extends Model {
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
        tableName: 'provider',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Identity, {
      foreignKey: 'providerId',
      as: 'identities',
    });
  }
}
