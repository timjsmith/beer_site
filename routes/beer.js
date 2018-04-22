const express = require('express'),
  router = express.Router();

// ROUTES

// INDEX ROUTE
router.get('/', (req, res) => {
  res.render('beer/index');
});

module.exports = router;
