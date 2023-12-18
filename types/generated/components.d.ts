import type { Schema, Attribute } from '@strapi/strapi';

export interface DayTuesday extends Schema.Component {
  collectionName: 'components_day_tuesdays';
  info: {
    displayName: 'tuesday';
  };
  attributes: {
    start: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'16:00'>;
    end: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'22:00'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'day.tuesday': DayTuesday;
    }
  }
}
