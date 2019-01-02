import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
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
    console.log(typeof this.state.beers);
    console.log("typeof above")
    API.getStock()
      .then(res => {
        setTimeout(this.updateBeerState.bind(null,res.data), 0);
      })
      .catch(err => console.log(err));
  };

  updateBeerState = (data) => {
    this.setState({ beers: data });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <br />
        <Grid>
          {this.state.beers.length ? (
            <Row>
              { this.state.beers.map( beer => (
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

export default withRouter(Menu);