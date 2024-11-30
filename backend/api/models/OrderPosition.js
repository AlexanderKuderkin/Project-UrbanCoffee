/**
 * OrderPosition.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    positionID: { type: 'number', required: true },
    quantity: { type: 'number', required: true },
    totalPrice: { type: 'number', columnType: 'decimal(10,2)', required: true },
    orderID: { type: 'number', required: true, foreignKey: true },
    coffeeID: { type: 'number', required: true, foreignKey: true },
  },
};
