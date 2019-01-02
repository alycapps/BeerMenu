import React from "react";

// Generic modal for popups
export const Modal = (props) => (
  <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      {props.buttonName}
    </button>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.modalTitle}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p id="messageLoc" style={{color:"red"}}></p>
            <form id="inputLoc">
              <label htmlFor="breweryName">Brewery Name: </label>
              <input
              id="breweryName"
              type="text"
              value={props.breweryName}
              name="breweryName"
              onChange={props.handleChange}
              placeholder= "eg. Awesome Breweries"
              />
              <br/>
              <label htmlFor="beerName">Beer Name: </label>
              <input
              id="beerName"
              type="text"
              value={props.beerName}
              name="beerName"
              onChange={props.handleChange}
              placeholder= "eg. Awesome IPA"
              />
              <br/>
              <label htmlFor="style">Style: </label>
              <input
              id="style"
              type="text"
              value={props.style}
              name="style"
              onChange={props.handleChange}
              placeholder= "eg. IPA"
              />
              <br/>
              <label htmlFor="abv">ABV: </label>
              <input
              id="abv"
              type="text"
              value={props.abv}
              name="abv"
              onChange={props.handleChange}
              placeholder= "eg. 123"
              />
              <br/>
              <label htmlFor="ibu">IBU: </label>
              <input
              id="ibu"
              type="text"
              value={props.ibu}
              name="ibu"
              onChange={props.handleChange}
              placeholder= "eg. 123"
              />
              <br/>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={props.handleClick}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
