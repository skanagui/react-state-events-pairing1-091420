import React from "react";
import DogCard from '../Components/DogCard';
import { apiResponse } from "../api";

class DogsList extends React.Component {
  state = {
    api: apiResponse
  }
  
  renderDogs = () => {
    return this.state.api.map(el => <DogCard key={el.id} dog={el} />)

  }

  render() {
    return <div className="list">{this.renderDogs()}</div>;
  }
}
export default DogsList;

