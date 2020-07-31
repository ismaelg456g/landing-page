import React from 'react';

function CarCard(props){
  return (<div class="card">
            <img src={props.src} class="card-img-top" alt={props.title}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
            </div>
          </div>);
}

export default CarCard;
