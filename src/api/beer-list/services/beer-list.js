'use strict';

/**
 * beer-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beer-list.beer-list');
