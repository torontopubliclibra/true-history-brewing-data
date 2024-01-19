'use strict';

/**
 * food-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-menu.food-menu');
