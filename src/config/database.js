import env from './env';

const database = {
  database: env.database.name,
  username: env.database.username,
  password: env.database.password,
  host: env.database.host,
  port: env.database.port,
  dialect: 'mariadb',
  dialectOptions: {
    dateStrings: true,
    timezone: env.database.timezone,
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: env.database.logging,
};

// Export the module in CommonJS format for Sequelize CLI.
exports[env.node] = database;

export default database;
