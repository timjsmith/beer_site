const express = require("express"),
      router  = express.Router();

// INDEX ROUTES

// INDEX
router.get("/", function(req,res){
  res.render("landing");
});

module.exports = router;