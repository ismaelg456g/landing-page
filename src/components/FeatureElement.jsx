import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function FeatureElement(props){
  return (<VisibilitySensor>
              {({isVisible}) => {
                return (<div>
                          <i className={"fas "+props.icon+" feature-icon"} style={{opacity: isVisible? 1 : 0}}></i>
                          <h3 className="title-features" style={{opacity: isVisible? 1 : 0}}>{props.title}</h3>
                          <p className="text-features" style={{opacity: isVisible? 1 : 0}}>{props.text}</p>
                        </div>);
              }}
            </VisibilitySensor>);
}

export default FeatureElement;
