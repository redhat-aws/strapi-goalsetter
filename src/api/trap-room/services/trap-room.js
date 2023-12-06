'use strict';

/**
 * trap-room service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trap-room.trap-room');
