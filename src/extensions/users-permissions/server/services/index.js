'use strict';

const jwt = require('@strapi/plugin-users-permissions/server/services/jwt');
const providers = require('./providers');
const user = require('@strapi/plugin-users-permissions/server/services/user');
const role = require('@strapi/plugin-users-permissions/server/services/role');
const usersPermissions = require('@strapi/plugin-users-permissions/server/services/users-permissions');

const providersRegistry = require('./providers-registry');

module.exports = {
  jwt,
  providers,
  'providers-registry': providersRegistry,
  role,
  user,
  'users-permissions': usersPermissions,
};
