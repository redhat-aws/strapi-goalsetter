'use strict';

/**
 * tech-tree service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tech-tree.tech-tree');
