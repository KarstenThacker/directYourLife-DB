import React, { Component } from "react";
import "../../App.css";
import "./Resources.css";
import ReactPlayer from "react-player";
import { Container} from 'react-bootstrap';
import Jumbotronresources from '../layouts/Jumbotronresources.js';

class Resources extends Component {
	render() {
		return (
      <div>
        <Container fluid className="resources">
          <Jumbotronresources />
          <h2>Video Section</h2>
          <div class="container">
            <div class="row row-cols-2">
              <div className="App player-wrapper">
                <header className="App-header react-player">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Qd4mxDwEcJo"
                    controls={true}
                    width="90%"
                    playing={false}
                  />
                </header>
                <br />
                <br />
                <header className="App-header react-player">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=6ZGR1phm8Js"
                    controls={true}
                    width="90%"
                    playing={false}
                  />
                </header>
              </div>
              <div className="App player-wrapper">
                <header className="App-header react-player">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=-JOWHElr3og"
                    controls={true}
                    width="90%"
                    playing={false}
                  />
                </header>
                <br />
                <br />
                <header className="App-header react-player">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Y-oc0z7b6DY"
                    controls={true}
                    width="90%"
                    playing={false}
                  />
                </header>
              </div>
            </div>
          </div>
          <p></p>
          <h2>Helpful Legal Links</h2>
          <br />
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <h3>FEDERAL</h3>
                <p>
                  <a href="https://flsc.ca/">
                    <b>Federation of Law Societies of Canada</b>
                  </a>
                </p>
                <p>
                  <h4>Alberta </h4>
                  <a href="https://www.lawsociety.ab.ca/">
                    <b>Law Societies of Alberta</b>
                  </a>
                </p>
                <p>
                  <h4>British Columbia </h4>
                  <a href="http://www.lawsociety.bc.ca/">
                    <b>Law Societies of British Columbia</b>
                  </a>
                </p>
                <p>
                  <h4>Manitoba </h4>
                  <a href="http://www.lawsociety.mb.ca/">
                    <b>Law Societies of Manitoba</b>
                  </a>
                </p>
                <p>
                  <h4>New Brunswick </h4>
                  <a href="http://www.lawsociety-barreau.nb.ca/">
                    <b>Law Societies of New Brunswick</b>
                  </a>
                </p>
                <p>
                  <h4>Newfoundland & Labrador</h4>
                  <a href="http://www.lawsociety.nf.ca/">
                    <b>Law Societies of Newfoundland & Labrador</b>
                  </a>
                </p>
              </div>
              <div class="col-sm">
                <p>
                  <h4>Northwest Territories</h4>
                  <a href="http://www.lawsociety.nt.ca/">
                    <b>Law Societies of Northwest Territories</b>
                  </a>
                </p>
                <p>
                  <h4>Nova Scotia</h4>
                  <a href="http://www.barreau.qc.ca/">
                    <b>Law Societies of Nova Scotia</b>
                  </a>
                </p>
                <p>
                  <h4>Nunavut</h4>
                  <a href="http://www.lawsociety.sk.ca/">
                    <b>Law Societies of Nunavut</b>
                  </a>
                </p>
                <p>
                  <h4>Ontario</h4>
                  <a href="http://www.lawsocietyyukon.com/">
                    <b>Law Societies of Ontario</b>
                  </a>
                </p>
              </div>
              <div class="col-sm">
                <p>
                  <h4>Prince Edward Island </h4>
                  <a href="http://www.lspei.pe.ca/">
                    <b>Law Societies of Prince Edward Island</b>
                  </a>
                </p>
                <p>
                  <h4>Quebec </h4>
                  <a href="http://www.barreau.qc.ca/">
                    <b>Law Societies of Quebec</b>
                  </a>
                </p>
                <p>
                  <h4>Saskatchewan</h4>
                  <a href="http://www.lawsociety.sk.ca/">
                    <b>Law Societies of Saskatchewan</b>
                  </a>
                </p>
                <p>
                  <h4>Yukon</h4>
                  <a href="http://www.lawsocietyyukon.com/">
                    <b>Law Societies of Yukon</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </Container>
      </div>
    );
	}
}

export default Resources;