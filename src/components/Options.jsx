import React from 'react';
import CarCard from './CarCard';

function Options(){
  return (<section id="options">
            <div id="carouselCars" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row justify-content-center">
                    <div className="col col-lg-4">
                      <CarCard src="img/cayman.jpg" title="Cayman S" text="Um carro esportivo da porsche com 300 cv e um visual lindo." />
                    </div>
                    <div className="col col-lg-4">
                      <CarCard src="img/model-s-tesla.jpeg" title="Model S" text="Um carro elétrico da famosa tesla com uma aceleração que vai de 0 a 60 mph em 2.3s."/>
                    </div>
                    <div className="col col-lg-4">
                      <CarCard src="img/ferrari-f12.jpeg" title="F12" text="O modelo F12 é da grande ferrari e carrega o grande legado desta marca."/>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <CarCard src="img/BMW-M3.jpeg" title="M3" text="Um carro esportivo da BMW com visual inovador e conforto ao máximo." />
                    </div>
                    <div className="col-4">
                      <CarCard src="img/ferrari-812.jpeg" title="812" text="Um carro da ferrari com um motor impressionante e um design de tirar o fôlego."/>
                    </div>
                    <div className="col-4">
                      <CarCard src="img/porsche-911-gts.jpeg" title="911 GTS" text="Um carro esportivo da porsche com um motor incrível."/>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselCars" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselCars" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        	</section>);
}

export default Options;
