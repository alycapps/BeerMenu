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
    beers: [],
    inStock: ""
  };

  componentDidMount() {
    this.loadBeers();
  };

  // function to load all beers
  loadBeers = () => {
    API.getBeers()
      .then(res =>
        this.setState({ beers: res.data }),
        console.log(this.state.beers)
        )
      .catch(err => console.log(err));
  };

  // function to change states
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
      abv: this.state.abv,
      inStock: true  
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

  // function to delete a specific beer
  deleteBeer = id => {
    API.deleteBeer(id)
      .then(res => this.loadBeers())
      .catch(err => console.log(err));
  };

  // function to change the instock to the opposite of the selected beer when the checkbox is clicked
  toggleState = (id, instock) => {
    console.log(instock + "instock")
    if (instock === true) {
      this.setState({ inStock: false });
      console.log('changing state to false')
      setTimeout(this.editBeer.bind(null,id), 0)
    }
    else {
      this.setState({ inStock: true });
      console.log('changing state to true')
      setTimeout(this.editBeer.bind(null,id), 0)
    }
  };

  // function to actually update the instock of the selected beer
  editBeer = id => {
    console.log(this.state);
    console.log("state above");
    let data = {
      '_id': id,
      'inStock': this.state.inStock
    }
    API.updateBeer(id, data)
    .then(
      res => console.log(res),
      console.log("res"),
      console.log(this.state.beers),
      console.log("beer"),
      this.loadBeers()
    )
    .catch(err => console.log(err));
  };

  filter = (event) => {
    let filterVal = event.target.value;
    let newBeers = this.state.beers;
    console.log(filterVal)
    newBeers.sort(this.dynamicSort(filterVal))
    this.setState({ beers: newBeers})
    console.log(this.state.beers)
  };

  dynamicSort = (property) => {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
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
                    <Col md={1} className="inStock">
                      <h6>On Tap?</h6>
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
                    <Col md={2}>
                    <select name="filter" onChange={this.filter} >
                      <option name= "filter" value="none">Filter By:</option>
                      <option name= "filter" value="breweryName">Brewery Name</option>
                      <option name= "filter" value="beerName">Beer Name</option>
                      <option name= "filter" value="style">Beer Style</option>
                    </select>
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
                        <Col md={1} className="inStock">
                          <input type="checkbox" className="inStock" checked={beer.inStock} onChange={() => this.toggleState(beer._id, beer.inStock)}/>
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
                        <Col md={2}>
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