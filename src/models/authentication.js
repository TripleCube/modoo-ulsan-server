import { DataTypes, Model } from 'sequelize';

export default class Authentication extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
        },
        provider: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'member_id',
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        expiresAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'expires_at',
        },
      },
      {
        sequelize,
        tableName: 'authentication',
        timestamps: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id',
    });
  }
}
