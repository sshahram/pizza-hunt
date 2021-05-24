const router = require('express').Router();

const PizzaRoutes = require('./pizza-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', PizzaRoutes);

module.exports = router;