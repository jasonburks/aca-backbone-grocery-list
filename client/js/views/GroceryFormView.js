const _ = require('lodash');
const Backbone = require('backbone');
const GroceryModel = require('../models/GroceryModel');


const GroceryFormView = Backbone.View.extend({
  el: `
    <form>
      <div>
        <label for="item">Item:</label>
        <input type="text" name="item" />
      </div>

      <div>
        <label for="qty">Qty:</label>
        <input type="text" name="qty" />
      </div>

      <input type="submit" value="+ Add items" />
    </form>
  `,

  events: {
     'submit': 'handleFormSubmit'
   },

   handleFormSubmit(e) {
     const form = $(e.target);
     const groceryAttrs = {
       item: form.find('input[name="item"]').val(),
       qty: form.find('input[name="qty"]').val()
     };
     let grocery = this.collection.filter(grocery => {
       return grocery.get('item').toLowerCase() === groceryAttrs.item.toLowerCase();
     })[0];

     if (grocery) {
        grocery.set('qty', groceryAttrs.qty);
     } else {
       grocery = new GroceryModel(groceryAttrs);
     }

     grocery.save(null, {
       success: () => {
         // Add the new Item
         this.collection.add(grocery);

         // Empty the form inputs
         form.find('input[type="text"]').val('');
       },

       error: () => {
         // Handle Error
       }

     });

     // Prevent the forms default action
     e.preventDefault();
  },

  render() {
    return this;
  }

});

module.exports = GroceryFormView;
