const BACKEND_PORT = require('./server');

const BACKEND_BASE_URL = `http://localhost:${BACKEND_PORT}`;
const FRONTEND_BASE_URL = 'http://localhost:3000';

module.exports = {
  BACKEND_BASE_URL,
  FRONTEND_BASE_URL,
};
