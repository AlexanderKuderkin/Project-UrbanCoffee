/**
 * Coffee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

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
      isIn: ['Arabica', 'Robusta', 'Lieberica', 'Excelsa']
    },

    certificates: {
      type: 'json',
      required: true,
      custom: function(value) {
        const allowedCertificates = [
          'UTZ Certified',
          'Fair Trade Certified',
          'Rainforest Alliance Certified',
          'Direct Trade',
          'Bird-Friendly'
        ];
        return Array.isArray(value) && value.every(cert => allowedCertificates.includes(cert));
      }
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
    category: {
      model: 'Category'
  },
    reviews: {
      collection: 'Reviews',
      via: 'coffee',
      description: 'The reviews associated with this coffee.'
    },
  
    imagePath: { type: 'string', required: false }

  },

};

