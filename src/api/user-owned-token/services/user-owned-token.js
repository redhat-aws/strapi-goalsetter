'use strict';

/**
 * user-owned-token service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-owned-token.user-owned-token');
