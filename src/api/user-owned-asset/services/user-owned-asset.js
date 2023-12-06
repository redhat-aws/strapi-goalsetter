'use strict';

/**
 * user-owned-asset service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-owned-asset.user-owned-asset');
