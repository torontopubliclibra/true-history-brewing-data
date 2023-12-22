'use strict';

/**
 * beer-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beer-menu.beer-menu');
