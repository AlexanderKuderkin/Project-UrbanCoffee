/**
 * CoffeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find: async function (req, res) {
      sails.log.debug("List all coffees....");
      let coffees = await Coffee.find();
      return res.json(coffees);
    },
  
    findOne: async function (req, res) {
      sails.log.debug("Find single coffee....");
      let coffee = await Coffee.findOne({ id: req.params.id }).populate('category');
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
      await Coffee.destroy({ id: req.params.id });
      return res.ok();
    },

    update: async function (req, res) {
      sails.log.debug("Updating coffee....");
      const updatedCoffee = await Coffee.updateOne({ id: req.params.id }).set(req.body);
    
      if (!updatedCoffee) {
        return res.notFound();
      }
      return res.ok();
    },      
};

