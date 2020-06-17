import { DataTypes, Model } from 'sequelize';

export default class Account extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          unique: true,
          field: 'member_id',
        },
      },
      {
        sequelize,
        tableName: 'account',
        timestamps: true,
      },
    );

    // this.addHook();
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id',
    });
  }
}
