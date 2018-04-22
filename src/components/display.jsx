import React from 'react';
import Weather from './weather';
import { Link } from "react-router-dom";


const Display = (props) => {

//console.log(props.value[0]);


  
  return (
   
    <table className="table table-bordered">
    <thead>
      <tr>
        <th colSpan='2'>Nashville Weather Forecast</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Current Temperature</th>
        <td>{props.value[0]}</td>
      </tr>
      <tr>
        <th scope="row">It Feels Like</th>
        <td>{props.value[1]}</td>
      </tr>
      <tr>
        <th scope="row">Humidity</th>
        <td>{props.value[2]}</td>
      </tr>
      <tr>
        <th scope="row">Precipitation</th>
        <td>{props.value[3]}%</td>
      </tr>
    </tbody>
  </table>

  
  )

};








export default Display;
