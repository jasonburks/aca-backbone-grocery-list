const Backbone = require('backbone');
const GroceryItemView = require('./GroceryItemView');
const GroceryFormView = require('./GroceryFormView');
const GroceryModel = require('../models/GroceryModel');


const GroceryListView = Backbone.View.extend({
  el: `
    <div>
      <div id="form"></div>
      <ul></ul>
    </div>
  `,

  initialize() {
    this.listenTo(this.collection, 'all', evt => console.log(evt));
    this.listenTo(this.collection, 'update', this.render);
  },

  render() {
    this.$el.find('#form').html(
      new GroceryFormView({ collection: this.collection }).render().el
    );

    // Clear the current li's from the ul
    this.$el.find('ul').html('');

    this.collection.forEach((item) => {
      const itemView = new GroceryItemView({ model: item });
      this.$el.find('ul').append(
        itemView.render().el
      );
    });

    return this;
  }

});

module.exports = GroceryListView;
