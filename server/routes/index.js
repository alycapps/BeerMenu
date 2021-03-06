const router = require("express").Router();
const apiRoutes = require("./API");
const path = require("path");

// API Routes - matches with /api
router.use("/api", apiRoutes);

// If no routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;