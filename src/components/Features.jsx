import React from 'react';
import FeatureElement from './FeatureElement';

function Features(){
  return (<section id="features">
            <div className="row">
              <div className="col-lg-4">
                <FeatureElement icon="fa-shield-alt" title="Segurança" text="Com a administração de consórcio das empresas mais sólidas do país, o seu dinheiro está seguro." />
              </div>
              <div className="col-lg-4">
                <FeatureElement icon="fa-users" title="Equipe" text="Nossa equipe é composta pelos melhores profissionais, e está pronta para te ajudar." />
              </div>
              <div className="col-lg-4">
                <FeatureElement icon="fa-check-circle" title="Variedade" text="Com a ajuda das maiores marcas, temos o carro certo para você." />
              </div>
            </div>
        	</section>);
}

export default Features;
