'use strict';

/**
 * taproom-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::taproom-schedule.taproom-schedule');
