const router = require("express").Router();
const beerRoutes = require("./beers");

// Cards routes - matches with /api/beers
router.use("/beers", beerRoutes);

module.exports = router;