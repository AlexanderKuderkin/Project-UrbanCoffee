/**
 * Coffee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    coffeeID: { type: 'number', required: true },
    name: { type: 'string', columnType: 'varchar(100)', required: true },
    price: { type: 'number', columnType: 'decimal(10,2)', required: true },
    description: { type: 'string', columnType: 'text', required: true },
    caffeineContent: { type: 'number', columnType: 'decimal(5,2)', required: true },
    brand: { 
      type: 'string', 
      required: true, 
      isIn: ['Tchibo','Jacobs','Mellitta','Eduscho']
    },
    roastDegree: { 
      type: 'string', 
      required: true,
      isIn: ['Light roast','Medium roast','Medium-dark roast','Dark roast']
    },

    beanType: { 
      type: 'string', 
      required: true, 
      isIn: ['UTZ Certified', 'Fair Trade Certified', 'Rainforest Alliance Certified', 'Direct Trade', 'Bird-Friendly']
    },

    certificates: {
      type: 'json',
      required: true,
      description: 'List of certifications that the coffee has',
      isIn: ['UTZ Certified', 'Fair Trade Certified', 'Rainforest Alliance Certified', 'Direct Trade', 'Bird-Friendly']
    },
    origin: {
      type: 'string',
      required: true,
      isIn: ['Europe', 'Asia', 'Africa', 'North-America', 'South-America','Australia']
    },
    grindType: {
      type: 'string',
      required: true,
      isIn: ['Whole bean','Coarse','Medium-coarse','Medium','Fine','Extra fine']
    },
    //imagePath: { type: 'string', required: false }
/*
    reviews: {
      collection: 'review',
      via: 'coffeeID'
    }
      */
  },

};

