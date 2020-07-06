import { DataTypes, Model } from 'sequelize';

export default class Reference extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        source: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        actionId: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'action_id',
        },
      },
      {
        sequelize,
        tableName: 'reference',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Action, {
      foreignKey: 'actionId',
      as: 'action',
    });
    this.hasMany(models.Vote, {
      foreignKey: 'referenceId',
      as: 'votes',
    });
    this.hasMany(models.Point, {
      foreignKey: 'referenceId',
      as: 'points',
    });
  }
}
