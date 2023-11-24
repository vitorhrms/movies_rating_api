import Sequelize from 'sequelize';

import { DB_HOST, DB_USER, DB_PWD, DB_NAME, DB_DIALECT } from '../config/env.js';

const localDB = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: console.log,
  dialectOptions: {
    options: {
      encrypt: false,
      requestTimeout: 300000,
    },
  },
});

export default localDB;
