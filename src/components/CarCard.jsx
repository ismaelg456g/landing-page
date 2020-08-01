import React from 'react';

function CarCard(props){
  return (<div className="card">
            <img src={props.src} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
          </div>);
}

export default CarCard;
