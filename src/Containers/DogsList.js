import React, { Component } from "react";
import DogCard from '../Components/DogCard';
import { apiResponse } from "../api";


class DogsList extends React.Component {

  renderDogs = () => {
    console.log(apiResponse)
    return this.apiResponse().map((dogObj) => <DogCard key={DogCard.id} breed={dogObj.breed} />) 

    
  }
  
  render() {
    
    return (
      <div className="list">
        {this.renderDogs()}
      </div>
    )
  }
}
export default DogsList;

