import { DataTypes, Model } from 'sequelize';

export default class Section extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.TINYINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isMine: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          field: 'is_mine',
        },
      },
      {
        sequelize,
        tableName: 'section',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Permission, {
      foreignKey: 'sectionId',
      targetKey: 'id',
    });
  }
}
