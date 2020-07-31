import React from 'react';
import CarCard from './CarCard';

function Options(){
  return (<section id="options">
		<div class="row">
			<div class="col-lg-4">
        <CarCard src="img/cayman.jpg" title="Cayman S" text="Um carro esportivo da porsche com 300 cv e um visual lindo." />
			</div>
			<div class="col-lg-4">
				<CarCard src="img/cayman.jpg" title="Cayman S" text="Um carro esportivo da porsche com 300 cv e um visual lindo."/>
			</div>
			<div class="col-lg-4">
				<CarCard src="img/cayman.jpg" title="Cayman S" text="Um carro esportivo da porsche com 300 cv e um visual lindo."/>
			</div>
		</div>
	</section>);
}

export default Options;
