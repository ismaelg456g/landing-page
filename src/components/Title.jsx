import React from 'react';

function Title(){
  return (<section id="title">
            <div className="title-div">
              <h1 className="logo">
                <a href="#">
                  <img src="img/logo-vert.png" alt="Guerra Consórcios" className="logo-img" />
                </a>
              </h1>
              <div className="title-text">
                <h2>A procura de um carro esportivo?</h2>
                <p >Nós podemos te ajudar a adquirir o carro perfeito</p>
                <a className="btn btn-primary round-btn" href="#form">Contate-nos</a>
              </div>
            </div>
          </section>);
}

export default Title;
