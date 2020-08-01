import React, {Component} from 'react';
import BrandImage from './BrandImage';

function Brands(){
    return (<section id="brands">
              <h2 className="text-body">Temos carros das melhores marcas no mercado</h2>
              <div className="row">
                <div className="col-lg-3">
                  < BrandImage src="img/ferrari.png" alt="ferrari"/>
                </div>
                <div className="col-lg-3">
                  < BrandImage src="img/porsche.png" alt="porsche"/>
                </div>
                <div className="col-lg-3">
                  < BrandImage src="img/bmw.png" alt="bmw"/>
                </div>
                <div className="col-lg-3">
                  < BrandImage src="img/tesla.png" alt="tesla"/>
                </div>
              </div>
            </section>);
}

export default Brands;
