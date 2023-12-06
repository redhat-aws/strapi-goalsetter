'use strict';

/**
 * user-owned-nft service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-owned-nft.user-owned-nft');
