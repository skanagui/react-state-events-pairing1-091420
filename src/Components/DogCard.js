import React from "react";


function DogCard(props) {
  
  return (
    <div className="card">
      <span className="content">
        <h2 >{props.dog.name}</h2>
        <img alt="" src={""} />
      </span>
      <span className="bark">
        <button>Bark</button>
      </span>
    </div>
  );
}

export default DogCard;
