import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function BrandImage(props){
  return (<VisibilitySensor >
            {({isVisible}) => {
              return (<img src={props.src} className="logo-car" alt={props.alt} style={{opacity: isVisible? 1 : 0}}/>);
            }}
          </ VisibilitySensor>);
}

export default BrandImage;
