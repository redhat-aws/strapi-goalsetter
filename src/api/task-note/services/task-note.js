'use strict';

/**
 * task-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-note.task-note');
