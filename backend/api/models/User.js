/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { custom } = require("../../config/env/production");

module.exports = {

  attributes: {

    fullName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.',
      columnType: 'varchar(120)',
      custom: function (value) {
        return /^[a-zA-ZÀ-ÿ\s]+$/u.test(value);
      },
      example: 'Mary Sue van der McHenst'
    },

      emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      columnType: 'varchar(120)',
      example: 'mary.sue@example.com'
    },

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad',
    },    

    addressPostalCode: { type: 'string', 
      columnType: 'varchar(10)', 
      required: true,
      custom: function (value) {
        return /^\d{4,6}$/u.test(value);
      },
    },



    addressCity: { type: 'string', 
      columnType: 'varchar(100)', 
      required: true,
      custom: function (value) {
        return /^[a-zA-ZÀ-ÿ\s]+$/u.test(value);
      },
    },
    
    addressCountry: { type: 'string', 
      columnType: 'varchar(100)', 
      required: true,
      custom: function (value) {
        return /^[a-zA-ZÀ-ÿ\s]+$/u.test(value);
      },
    },
    addressStreet: { 
      type: 'string', 
      columnType: 'varchar(100)', 
      required: true, 
      custom: function (value) {
        return /^[a-zA-ZÀ-ÿß\s\-]+\s\d{1,5}$/u.test(value);
      },
      
     },

    isSuperAdmin: {
      type: 'boolean',
      description: 'Whether this user is a "super admin" with extra permissions, etc.',
    },
  },
  reviews: {
    collection: 'Reviews',
    via: 'user',
    description: 'The reviews written by this user.'
  },
  orders: {
    collection: 'Order',
    via: 'user',
  },
  

};
