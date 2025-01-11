/**
 * OrderPosition.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    quantity: {type: 'number',required: true,min: 1},
    price: {type: 'number',columnType: 'decimal(10,2)',required: true},
    order: {model: 'Order'},
    coffee: {model: 'Coffee'},
  },
};