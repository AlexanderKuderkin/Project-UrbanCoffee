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

  '/': { view: 'pages/homepage' },

  'GET /Coffee': { controller: 'CoffeeController', action: 'find' },
  'POST /Coffee': { controller: 'CoffeeController', action: 'create' },
  'DELETE /Coffee/:id': { controller: 'CoffeeController', action: 'destroy' },
  'PUT /Coffee/:id': { controller: 'CoffeeController', action: 'update' },
  'GET /Coffee/:id': { controller: 'CoffeeController', action: 'findOne' },

  'POST /login': 'LoginController.login',
  'POST /register': 'LoginController.register',
  'GET /logout': "login.logout",
  'GET /restricted': 'RestrictedController.example',
  'GET /sessionUser': "login.sessionUser",

  'GET /api/reviews/user-reviews': 'ReviewsController.getUserReviews',
  'GET /api/reviews/user-coffees': 'ReviewsController.getUserCoffees',
  'POST /api/reviews/create': 'ReviewsController.createReview',

  'PUT /updateUser': 'LoginController.updateUser',

  'POST /api/order/createOrder': 'OrderController.createOrder',
  'GET /api/orders': 'OrderController.findByUser',

};

