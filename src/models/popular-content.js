import { DataTypes, Model } from 'sequelize';

export default class PopularContent extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        referenceId: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          field: 'reference_id',
        },
        boardId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          field: 'board_id',
        },
      },
      {
        sequelize,
        tableName: 'popular_content',
        timestamps: true,
        updatedAt: false,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Reference, {
      foreignKey: 'referenceId',
      as: 'reference',
    });
    this.belongsTo(models.Board, {
      foreignKey: 'boardId',
      as: 'board',
    });
  }
}
