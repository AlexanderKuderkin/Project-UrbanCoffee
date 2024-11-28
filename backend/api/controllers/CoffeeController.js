/**
 * CoffeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    find: async function (req, res) {
        //sails.log.debug("List all categories....");
        //let categories = await Category.find();
        let coffee = [
          {
              "id": "001",
              "name": "Caffee Crema",
              "description": "Carabic Coffee from Brasil",
              "brand": "Tchibo",
              "rost level": "light",
              "caffeine content": "low",
              "bean variety": "Arabic",
              "price": "10,00",
              "grind size": "whole bean",
              "certification": "direct trade",
              "origin": "europe"
          }
        ]
        return res.json(coffee);
      }
};

