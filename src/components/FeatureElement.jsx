import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Features(props){
  return (<VisibilitySensor>
              {({isVisible}) => {
                return (<div>
                          <i className={"fas "+props.icon+" feature-icon"} style={{opacity: isVisible? 1 : 0}}></i>
                          <h3 className="title-features" style={{opacity: isVisible? 1 : 0}}>Segurança</h3>
                          <p className="text-features" style={{opacity: isVisible? 1 : 0}}>Com a administração de consórcio das empresas mais sólidas do país, o seu dinheiro está seguro. </p>
                        </div>);
              }}
            </VisibilitySensor>=);
}

export default Features;
