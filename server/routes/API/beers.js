const router = require("express").Router();
const Controller = require("../../controllers/controller.js");

// Matches with "/api/beers"
router
  .route("/")
  .get(Controller.findAll)
  .post(Controller.create);

// Matches with "/api/beers/:id"
router
  .route("/:id")
  .put(Controller.update)
  .delete(Controller.remove);

module.exports = router;
