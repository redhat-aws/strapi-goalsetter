'use strict';

/**
 * goal-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::goal-task.goal-task');
