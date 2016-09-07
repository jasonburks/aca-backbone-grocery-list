const $ = require('jquery');
const GroceryCollection = require('./collections/GroceryCollection');

// Set jQuery in the window
window.$ = window.jQuery = $;

const GroceryListView = require('./views/GroceryListView');

const items = new GroceryCollection();

items.fetch();

const view = new GroceryListView({ collection: items });
const app = document.querySelector('#app');

app.appendChild(view.render().el);
