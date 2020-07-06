import { DataTypes, Model } from 'sequelize';

export default class Vote extends Model {
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
        isLike: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'is_like',
        },
      },
      {
        sequelize,
        tableName: 'action',
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
