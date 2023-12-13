import type { Schema, Attribute } from '@strapi/strapi';

export interface BeerBeerItem extends Schema.Component {
  collectionName: 'components_beer_beer_items';
  info: {
    displayName: 'beer';
    description: '';
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    abv: Attribute.Decimal & Attribute.Required;
    volume: Attribute.Integer & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ScheduleSchedule extends Schema.Component {
  collectionName: 'components_schedule_schedules';
  info: {
    displayName: 'day-hours';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    start: Attribute.Time & Attribute.Required;
    end: Attribute.Time & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'beer.beer-item': BeerBeerItem;
      'schedule.schedule': ScheduleSchedule;
    }
  }
}
