import 'dotenv/config';

const { DB_HOST, DB_USER, DB_PWD, DB_NAME, DB_DIALECT, APP_PORT } = process.env;

export { DB_HOST, DB_USER, DB_PWD, DB_NAME, DB_DIALECT, APP_PORT };
