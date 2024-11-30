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
              "origin": "Europe"
          }
        ]
        return res.json(coffee);
    },
/*
    find: async function (req, res) {
      sails.log.debug("List all coffees....");
      let coffees = await Coffee.find();
      return res.json(coffees);
    },

    findOne: async function (req, res) {
      sails.log.debug("Find single coffee....");
      let coffee = await Coffee.findOne({ coffeeID: req.params.id });
      if (!coffee) {
        return res.notFound({ error: 'Coffee not found' });
      }
      return res.json(coffee);
    },

    create: async function (req, res) {
      sails.log.debug("Create coffee....");
      let params = req.allParams();
      await Coffee.create(params);
      return res.ok();
    },

    destroy: async function (req, res) {
      sails.log.debug("Delete coffee....");
      await Coffee.destroy({ coffeeID: req.params.id });
      return res.ok();
    }

    uploadImage: async function (req, res) {
      req.file('image').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
        maxBytes: 10000000
      },     
      const imagePath = '/images/' + uploadedFiles[0].filename;
      const coffee = await Coffee.create({
        name: req.body.name,
        price: req.body.price,
        imagePath: imagePath
      }).fetch();

      return res.json({ coffee, message: 'Image uploaded successfully!!!!!!' });
    });
  },
      */
};

