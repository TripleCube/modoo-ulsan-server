import { DataTypes, Model } from 'sequelize';

export default class Action extends Model {
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
        points: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'action',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Reference, {
      foreignKey: 'actionId',
      as: 'references',
    });
  }
}
