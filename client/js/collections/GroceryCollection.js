const Backbone = require('backbone');
const GroceryModel = require('../models/GroceryModel');

const GroceryCollection = Backbone.Collection.extend({
  url: '/grocery',
  model: GroceryModel
});

module.exports = GroceryCollection;
