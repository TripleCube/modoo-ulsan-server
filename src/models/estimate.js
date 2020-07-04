import { DataTypes, Model } from 'sequelize';

export default class Estimate extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        vehicleName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'vehicle_name',
        },
        travelId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'travel_id',
        },
        dayId: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'day_id',
        },
        time: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
        },
        likeCount: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'like_count',
        },
        dislikeCount: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'dislike_count',
        },
        isUserInput: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'is_user_input',
        },
        isVerified: {
          type: DataTypes.BOOLEAN,
          field: 'is_verified',
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'member_id',
        },
      },
      {
        sequelize,
        tableName: 'estimate',
        timestamps: true,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Travel, {
      foreignKey: 'travelId',
      as: 'travel',
    });
    this.belongsTo(models.Day, {
      foreignKey: 'dayId',
      as: 'day',
    });
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      as: 'member',
    });
  }
}
