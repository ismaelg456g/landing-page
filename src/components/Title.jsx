import React from 'react';

function Title(){
  return (<section id="title">
            <div class="title-div">
              <h1 class="logo">
                <a href="#">
                  <img src="img/logo-vert.png" alt="Guerra Consórcios" class="logo-img" />
                </a>
              </h1>
              <div class="title-text">
                <h2>A procura de um carro esportivo?</h2>
                <p >Nós podemos te ajudar a adquirir o carro perfeito</p>
                <a class="btn btn-primary round-btn" href="#form">Contate-nos</a>
              </div>
            </div>
          </section>);
}

export default Title;
