/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //'GET /Coffee': { controller: 'CoffeeController', action: 'find' },
  'GET /Coffee': 'Coffee.find',

  //'GET /coffee/:id': { controller: 'CoffeeController', action: 'findOne' },
  //'GET /manageCoffee': { controller: 'CoffeeController', action: 'find' },
  //'GET /manageCoffee/:id': { controller: 'CoffeeController', action: 'findOne' },

  'POST /ManageCoffee': { controller: 'CoffeeController', action: 'create' },
  'DELETE /Coffee/:id': { controller: 'CoffeeController', action: 'destroy' },


  'PUT /Coffee/:id': { controller: 'CoffeeController', action: 'update' },
  'GET /Coffee/:id': { controller: 'CoffeeController', action: 'findOne' },

  //'PUT /manageCoffee/:id': { controller: 'CoffeeController', action: 'update' },

  //'DELETE /manageCoffee/:id': { controller: 'CoffeeController', action: 'delete' },

  //'POST /manageCoffee': { controller: 'CoffeeController.uploadImage', action: 'create' },

};

