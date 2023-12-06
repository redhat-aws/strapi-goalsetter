'use strict';

/**
 * decision-point service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::decision-point.decision-point');
