import React, {Component} from "react";
import API from "../../utils/API"
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import {Card} from "../../components/Card";

class Menu extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    this.loadBeers();
  };

  // function to load all beers
  loadBeers = () => {
    API.getStock()
      .then(res =>
        this.setState({ beers: res.data, inStock: "", breweryName: "", beerName: "", ibu: "", abv: "" }),
        )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br />
        <Grid>
          {this.state.beers.length ? (
            <Row>
              {/* Details for each Beer added to card */}
              { this.state.beers.map( beer => (

                // { {beer.inStock}? ( console.log("yes")) : (console.log("no")) }  
                // switch ( {beer.inStock} ) {

                // }
                <Col md={12}>
                  <Card>
                    <Row>
                      <Col md={3} className="breweryName">
                        {beer.breweryName}
                      </Col>
                      <Col md={3} className="beerName">
                        <h6>
                          {beer.beerName}
                        </h6>  
                      </Col>
                      <Col md={2} className="style">
                        {beer.style}
                      </Col>
                      <Col md={2} className="abv">
                        {beer.abv}
                      </Col>
                      <Col md={2} className="ibu">
                        {beer.ibu}
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <h3> No Beers Listed -- Please check with the Bartender. </h3>
          )}
        </Grid>
      </div>
    );
  }
}

export default Menu;