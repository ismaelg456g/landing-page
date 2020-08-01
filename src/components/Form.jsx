import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Form(){
  return (<section id="form">
            <VisibilitySensor>
            {({isVisible}) => {
              return (
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="form-title" style={{opacity: isVisible? 1 : 0}}>Quer receber mais informações?</h3>
                    <p className="form-text" style={{opacity: isVisible? 1 : 0}}>Entre em contato!</p>
                  </div>
                  <div className="col-lg-6 form-fields">
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Nome"/>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Endereço de e-mail"/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="phone-input" placeholder="Telefone"/>
                      </div>
                      <button type="submit" className="btn btn-primary btn-block round-btn">Receba nossas ofertas!</button>
                    </form>
                  </div>
                </div>
              );
            }}
            </VisibilitySensor>
        	</section>);
}

export default Form;
