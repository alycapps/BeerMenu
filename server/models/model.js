const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  breweryName: { type: String, required: true },
  beerName: { type: String, required: false },
  style: { type: String, required: false },
  abv: { type: Number, required: false },
  ibu: { type: Number, required: false},
  inStock: {type: Boolean, required: false}
});

const Beers = mongoose.model("Beers", beerSchema);

module.exports = Beers;
