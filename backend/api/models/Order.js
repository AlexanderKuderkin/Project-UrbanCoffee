/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    orderDate: { type: 'ref', columnType: 'datetime', required: true },
    totalAmount: { type: 'number', columnType: 'decimal(10,2)', required: true },
    user: {model: 'User'},
    orderPosition: { collection: 'OrderPosition', via: 'order'},
  },

};
