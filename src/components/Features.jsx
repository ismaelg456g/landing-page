import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Features(){
  return (<section id="features">
            <VisibilitySensor>
            {({isVisible}) => {
              return (<div className="row">
                    <div className="col-lg-4">
                      <i className="fas fa-shield-alt feature-icon" style={{opacity: isVisible? 1 : 0}}></i>
                      <h3 className="title-features" style={{opacity: isVisible? 1 : 0}}>Segurança</h3>
                      <p className="text-features" style={{opacity: isVisible? 1 : 0}}>Com a administração de consórcio das empresas mais sólidas do país, o seu dinheiro está seguro. </p>
                    </div>
                    <div className="col-lg-4">
                      <i className="far fa-check-circle feature-icon" style={{opacity: isVisible? 1 : 0}}></i>
                      <h3 className="title-features" style={{opacity: isVisible? 1 : 0}}>Variedade</h3>
                      <p className="text-features" style={{opacity: isVisible? 1 : 0}}>Com a ajuda das grandes marcas, temos disponível o carro certo para você.</p>
                    </div>
                    <div className="col-lg-4">
                      <i className="fas fa-users feature-icon" style={{opacity: isVisible? 1 : 0}}></i>
                      <h3 className="title-features" style={{opacity: isVisible? 1 : 0}}>Equipe</h3>
                      <p className="text-features" style={{opacity: isVisible? 1 : 0}}>Nossa equipe é composta pelos melhores profissionais, e está pronta para te ajudar.</p>
                    </div>
                 </div>);
            }}
            </VisibilitySensor>
        	</section>);
}

export default Features;
