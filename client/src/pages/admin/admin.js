import React, {Component} from "react";
import API from "../../utils/API"
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import ButtonToolBar from "react-bootstrap/lib/ButtonToolbar";
import Button from "react-bootstrap/lib/Button";
import {Modal} from "../../components/Modal"
import {Card} from "../../components/Card";


class Admin extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    this.loadBeers();
  };

  loadBeers = () => {
    API.getBeers()
      .then(res =>
        this.setState({ beers: res.data, breweryName: "", beerName: "", style: "", ibu: "", abv: "" }),
        console.log(this.state.cards)
        )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  // function to add the beer to Mongo
  addBeer = () => {
    console.log("add beer function ran")
    const beerInfo = {
      breweryName: this.state.breweryName,
      beerName: this.state.beerName, 
      style: this.state.style, 
      ibu: this.state.ibu, 
      abv: this.state.abv  
    }
    API.saveBeer(beerInfo).then(res => {
        console.log(res, "This is the response from beer info");
        if (res.status === 200) {
          console.log("Beer succesfully added");
          this.loadBeers();
        }
        else {
          console.log("There was a problem saving your beer");
        }
    });
  };

  deleteBeer = id => {
    API.deleteBeer(id)
      .then(res => this.loadBeers())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br />
        <Grid>
          <Row>
            <Col md={7}>
              <h1>Admin Page</h1> 
            </Col>
            <Col md={5}>
              <Modal 
                buttonName="Add New Beer" 
                modalTitle="Add New Beer"
                breweryName={this.state.breweryName}
                beerName={this.state.beerName}
                abv={this.state.abv}
                ibu={this.state.ibu}
                handleChange={this.handleInputChange}
                handleClick={this.addBeer}
              >
              </Modal>
            </Col>
          </Row>

          {this.state.beers.length ? (
            <div>
            {/* Headers */}
            <Row>
              <Col md={12}>
                <Card>
                  <Row>
                    <Col md={2} className="inStock">
                      <h6>In Stock?</h6>
                    </Col>
                    <Col md={2} className="breweryName">
                      <h6>Brewery Name</h6>
                    </Col>
                    <Col md={2} className="beerName">
                      <h6>Beer Name</h6>
                    </Col>
                    <Col md={2} className="style">
                      <h6>Beer Style</h6>
                    </Col>
                    <Col md={1} className="abv">
                      <h6>ABV</h6>
                    </Col>
                    <Col md={2} className="ibu">
                      <h6>IBU</h6>
                    </Col>
                    <Col md={1}>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            {/* Beer Card Templates */}
            <Row>
              {/* Details for each Beer added to card */}
                { this.state.beers.map( beer => (
                  <Col md={12}>
                    <Card>
                      <Row>
                        <Col md={2} className="inStock">
                          <input type="checkbox" className="inStock" value={beer.inStock} />
                        </Col>
                        <Col md={2} className="breweryName">
                          {beer.breweryName}
                        </Col>
                        <Col md={2} className="beerName">
                          {beer.beerName}
                        </Col>
                        <Col md={2} className="style">
                          {beer.style}
                        </Col>
                        <Col md={1} className="abv">
                          {beer.abv}
                        </Col>
                        <Col md={2} className="ibu">
                          {beer.ibu}
                        </Col>
                        <Col md={1}>
                          <ButtonToolBar>
                            <Button bsStyle="danger" onClick={() => this.deleteBeer(beer._id)} >Delete</Button>
                          </ButtonToolBar>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
            </Row>
            </div>

          ) : (
            <h3> No Beers Listed -- Please click "Add New Beer" to begin. </h3>
          )}

        </Grid>
      </div>
    );
  }
}

export default Admin;