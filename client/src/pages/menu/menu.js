import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import API from "../../utils/API"
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import {Card} from "../../components/Card";

class Menu extends Component {
  state = {
    loading: true,
    beers: []
  };

  componentDidMount() {
    this.loadBeers();
  };

  // function to load all beers
  loadBeers = () => {
    API.getStock()
      .then(res => {
        setTimeout(this.updateBeerState.bind(null,res.data), 0);
      })
      .catch(err => console.log(err));
  };

  // function to actually update the state
  updateBeerState = (data) => {
    this.setState({ beers: data, loading: false });
    console.log(this.state);
  }

  render() {
    // allows for better user experience on initial page load
    if(this.state.loading) {
      return 'Loading...'
    }
    // actual functionality
    return (
      <div>
        <br />
        <Grid>
          { (this.state.beers && this.state.beers.length > 0) ? (
            <Row>
              { this.state.beers.map( (beer, i) => (
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