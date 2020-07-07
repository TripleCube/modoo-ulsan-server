import { DataTypes, Model } from 'sequelize';

export default class Member extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        displayName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          field: 'display_name',
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.GEOMETRY('POINT', 4326),
          allowNull: false,
        },
        profileImage: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'profile_image',
        },
        points: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        dailyLimit: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'daily_limit',
        },
        roleId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'role_id',
        },
      },
      {
        sequelize,
        tableName: 'member',
        timestamps: true,
        paranoid: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'role',
    });
    this.hasOne(models.Account, {
      foreignKey: 'memberId',
      as: 'account',
    });
    this.hasMany(models.Identity, {
      foreignKey: 'memberId',
      as: 'identities',
    });
    this.hasMany(models.Estimate, {
      foreignKey: 'memberId',
      as: 'estimates',
    });
    this.hasMany(models.Bookmark, {
      foreignKey: 'memberId',
      as: 'bookmarks',
    });
    this.hasMany(models.Vote, {
      foreignKey: 'memberId',
      as: 'votes',
    });
    this.hasMany(models.Point, {
      foreignKey: 'memberId',
      as: 'pointsHistory',
    });
    this.hasMany(models.Post, {
      foreignKey: 'memberId',
      as: 'posts',
    });
    this.hasMany(models.Comment, {
      foreignKey: 'memberId',
      as: 'comments',
    });
    this.hasMany(models.Restriction, {
      foreignKey: 'memberId',
      as: 'restrictions',
    });
    this.hasMany(models.Report, {
      foreignKey: 'sourceMemberId',
      as: 'sourceMembers',
    });
    this.hasMany(models.Report, {
      foreignKey: 'targetMemberId',
      as: 'targetMembers',
    });
  }
}
