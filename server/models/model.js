const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  breweryName: { type: String, required: true },
  beerName: { type: String, required: false },
  style: { type: String, required: false },
  abv: { type: String, required: false },
  ibu: { type: String, required: false },
  inStock: {type: Boolean, required: false}
});

const Beers = mongoose.model("Beers", beerSchema);

module.exports = Beers;
