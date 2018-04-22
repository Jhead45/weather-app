import React, { Component, Fragment} from "react";
import Display from './display';
import { Link } from "react-router-dom";
import "isomorphic-fetch";
import "es6-promise";



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6705fd0721ebfc5e1b74755d0e31690b/36.1340,-86.6735")
      .then(results => results.json())
      .then(results => {
        this.setState({ results });
       //console.log(results.currently.summary);
       let temp = results.currently.temperature;
       //console.log(temp);
       let feelsLike = results.currently.apparentTemperature;
       //console.log(feelsLike);
       let humidity = results.currently.humidity;
       //console.log(humidity);
       let precipitation = results.currently.precipProbability * 100;
       //console.log(results.currently.precipProbability); 
       this.setState({results: [temp, feelsLike, humidity, precipitation]});
       //console.log(results);
       

      });
  }

  render() {
        return (
          <div>
          <div className='d-flex justify-content-center'>
            <Link className="btn btn-info button mr-4 mt-2" to="/">
          Go Home
            </Link></div>
            <Display value= {this.state.results}/>
          </div>)
        
        
      }
}

export default Weather;



