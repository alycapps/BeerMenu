const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  breweryName: { type: String, required: true },
  beerName: { type: String, required: true },
  style: { type: String, required: true },
  abv: { type: String, required: false },
  ibu: { type: String, required: false}
});

const Cards = mongoose.model("Beers", beerSchema);

module.exports = Cards;
