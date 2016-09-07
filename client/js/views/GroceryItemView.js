const _ = require('lodash');
const Backbone = require('backbone');

const GroceryItemView = Backbone.View.extend({
  el: `<li class="grocery-info"></li>`,

  template: _.template(`
    <div>
      <label>Item:</label>
      <%= grocery.get('item') %>
    </div>
    <div>
      <label>Qty:</label>
      <%= grocery.get('qty') %>
    </div>
    <div>
      <label>Purchased:</label>
      <input type="checkbox" <%= grocery.get('activated') ? 'checked' : '' %> />
    </div>
  `),

  events: {
    'click input[type="checkbox"]': 'handleCheckboxClick'
  },

  handleCheckboxClick(e) {
    this.model.save({ activated: e.target.checked });
  },

  initialize() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render() {
    if (this.model.get('activated')) {
      this.$el.addClass('activated');
    } else {
      this.$el.removeClass('activated');
    }

    this.$el.html(this.template({ grocery: this.model }));
    return this;
  }
});

module.exports = GroceryItemView;
