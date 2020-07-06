import { DataTypes, Model } from 'sequelize';

export default class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          field: 'member_id',
        },
        referenceId: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          field: 'reference_id',
        },
        amount: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
        },
        isEarned: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'is_earned',
        },
      },
      {
        sequelize,
        tableName: 'point',
        timestamps: true,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      as: 'member',
    });
    this.belongsTo(models.Reference, {
      foreignKey: 'referenceId',
      as: 'reference',
    });
  }
}
