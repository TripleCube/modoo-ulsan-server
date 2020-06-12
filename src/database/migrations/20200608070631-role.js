import { createAndDropTable } from '@utils/database';

const tableName = 'role';
const attributes = Sequelize => ({
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

export default createAndDropTable(tableName, attributes);
