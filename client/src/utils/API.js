import axios from "axios";

export default {
  // Gets all beers
  getBeers: function() {
    return axios.get("/api/beers");
  },
  // Gets stock
  getStock: function() {
    return axios.get("/api/beers/stock");
  },
  // Gets the beer with the given id
  getBeer: function(id) {
    return axios.get("/api/beers/" + id);
  },
  // Update beer info with given id
  updateBeer: function(id, data) {
    return axios.put("/api/beers/" + id, data);
  },
  // Deletes the beer with the given id
  deleteBeer: function(id) {
    return axios.delete("/api/beers/" + id);
  },
  // Saves a beer to the database
  saveBeer: function(beerInfo) {
    return axios.post("/api/beers", beerInfo);
  }
};