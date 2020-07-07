import { DataTypes, Model } from 'sequelize';

export default class Report extends Model {
  static init(sequelize) {
    super.init(
      {
        sourceMemberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          field: 'source_member_id',
        },
        targetMemberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          field: 'target_member_id',
        },
        referenceId: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          field: 'reference_id',
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        violationId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'violation_id',
        },
      },
      {
        sequelize,
        tableName: 'report',
        timestamps: true,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'sourceMemberId',
      as: 'sourceMember',
    });
    this.belongsTo(models.Member, {
      foreignKey: 'targetMemberId',
      as: 'targetMember',
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
