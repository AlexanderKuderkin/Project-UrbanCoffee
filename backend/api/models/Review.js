/**
 * Review.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    reviewID: { type: 'number', required: true },
    comment: { type: 'string', columnType: 'text', required: true },
//Rating von 0.5 bis 5
    rating: {type: 'number',columnType: 'decimal(2,1)',required: true,
      min: 0.5,
      max: 5.0,
    },
    userID: { type: 'number', required: true, foreignKey: true },
    coffeeID: { type: 'number', required: true, foreignKey: true },
/*
    coffeeID: {
      model: 'coffee',
      required: true,
    }
    */
  },
};
