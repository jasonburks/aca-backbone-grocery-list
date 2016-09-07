const backbone = require('backbone');

const GroceryModel = backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/grocery'
});

module.exports = GroceryModel;
