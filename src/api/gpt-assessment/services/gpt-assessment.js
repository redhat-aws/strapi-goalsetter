'use strict';

/**
 * gpt-assessment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gpt-assessment.gpt-assessment');
