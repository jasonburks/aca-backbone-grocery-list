const GroceryModel = require('../models/GroceryModel');

module.exports = {
  // Provide a list of each resource
  list(req, res, next) {
    GroceryModel.find().exec()
      .then(groceries => {
        res.json(groceries);
      })
      .catch(err => {
        return next(err);
      });
  },

  show(req, res, next) {
    GroceryModel.findOne({ _id: req.params.id }).exec()
      .then(grocery => {
        return res.json(grocery);
      })
      .catch(err => {
        return next(err);
      });
  },

  // Create a new resource
  create(req, res, next) {
    const { item, qty } = req.body;

    if (!item || !qty) {
      return next({ message: "Must provide all required fields", status: 422 });
    }

    const grocery = new GroceryModel({
      item,
      qty
    });

    grocery.save()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        return next(err);
      });
  },

  // Update the resource
  update(req, res, next) {
    const { id: _id } = req.params;

    GroceryModel.findOne({ _id }).exec()
      .then(grocery => {
        const { activated, qty } = req.body;
        grocery.activated = activated;
        grocery.qty = qty;

        grocery.save()
          .then(grocery => {
            res.json(grocery);
          })
          .catch(err => {
            return next(err);
          });
      })
  }
}
