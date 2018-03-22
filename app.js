const express         = require("express"),
      app             = express(),
      bodyParser      = require("body-parser")
      methodOverride  = require("method-override");

//routes
let indexRoutes = require("./routes/index");
let beerRoutes = require("./routes/beer");

//app configuration
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//express router
app.use("/", indexRoutes);
app.use("/beer", beerRoutes);

//Start server
app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("Beer Review has started");
});