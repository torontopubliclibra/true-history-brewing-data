import type { Schema, Attribute } from '@strapi/strapi';

export interface BeerBeer extends Schema.Component {
  collectionName: 'components_beer_beers';
  info: {
    displayName: 'beer';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    abv: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<4>;
    price: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<9.25>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
  };
}

export interface BeverageBeverage extends Schema.Component {
  collectionName: 'components_beverage_beverages';
  info: {
    displayName: 'beverage';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    abv: Attribute.Decimal;
    price: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<5>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
  };
}

export interface DayDay extends Schema.Component {
  collectionName: 'components_day_days';
  info: {
    displayName: 'day';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    start: Attribute.Time & Attribute.DefaultTo<'16:00'>;
    end: Attribute.Time & Attribute.DefaultTo<'22:00'>;
    service: Attribute.Enumeration<['open', 'closed', 'bottle shop']> &
      Attribute.Required &
      Attribute.DefaultTo<'open'>;
  };
}

export interface EventEvent extends Schema.Component {
  collectionName: 'components_event_events';
  info: {
    displayName: 'event';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    start: Attribute.DateTime & Attribute.Required;
    end: Attribute.Time;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    link: Attribute.String;
  };
}

export interface FoodItemFoodItem extends Schema.Component {
  collectionName: 'components_food_item_food_items';
  info: {
    displayName: 'food-item';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    size: Attribute.Enumeration<['sm', 'med', 'lrg']> &
      Attribute.Required &
      Attribute.DefaultTo<'sm'>;
    price: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<8>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'beer.beer': BeerBeer;
      'beverage.beverage': BeverageBeverage;
      'day.day': DayDay;
      'event.event': EventEvent;
      'food-item.food-item': FoodItemFoodItem;
    }
  }
}
