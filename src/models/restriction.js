import { DataTypes, Model } from 'sequelize';

export default class Restriction extends Model {
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
        violationId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'violation_id',
        },
      },
      {
        sequelize,
        tableName: 'restriction',
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
    this.belongsTo(models.Violation, {
      foreignKey: 'violationId',
      as: 'violation',
    });
  }
}
