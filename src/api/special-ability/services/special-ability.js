'use strict';

/**
 * special-ability service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special-ability.special-ability');
