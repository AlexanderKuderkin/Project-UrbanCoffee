/**
 * Reviews.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    rating: {type: 'number', min: 1, max: 5, required: true, description: 'The rating for the coffee (1-5).'},
    comment: {type: 'string', columnType: 'text', required: true, description: 'The review comment provided by the user.'},
    user: {
      model: 'User'
    },
    coffee: {
      model: 'Coffee'
    },
  },
};