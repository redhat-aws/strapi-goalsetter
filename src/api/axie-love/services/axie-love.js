'use strict';

/**
 * axie-love service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::axie-love.axie-love');
