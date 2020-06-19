import { DataTypes, Model } from 'sequelize';

export default class Identity extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        providerId: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'provider_id',
        },
        providerKey: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'provider_key',
        },
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: true,
          },
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'member_id',
        },
      },
      {
        sequelize,
        tableName: 'identity',
        timestamps: true,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Provider, {
      foreignKey: 'provider_id',
      targetKey: 'id',
    });
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id',
    });
  }
}
