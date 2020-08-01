import React, {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Brands(){
    return (<section id="brands">
              <VisibilitySensor >
              {({isVisible}) => {
                return (
                  <div>
                    <h2 className="text-body">Temos carros das melhores marcas no mercado</h2>
                      <div>
                        <img src="img/ferrari.png" className="logo-car" alt="ferrari" style={{opacity: isVisible? 1 : 0}}/>
                        <img src="img/porsche.png" className="logo-car" alt="porsche" style={{opacity: isVisible? 1 : 0}}/>
                        <img src="img/bmw.png" className="logo-car" alt="bmw" style={{opacity: isVisible? 1 : 0}}/>
                        <img src="img/tesla.png" className="logo-car" alt="tesla" style={{opacity: isVisible? 1 : 0}}/>
                      </div>
                  </div>
                );
              }}
              </ VisibilitySensor>
            </section>);
}

export default Brands;
