export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('role', {
    id: {
      type: Sequelize.SMALLINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
}

export async function down(queryInterface) {
  return queryInterface.dropTable('role');
}
