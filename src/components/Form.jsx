import React from 'react';

function Form(){
  return (<section id="form">
        		<div class="row">
        			<div class="col-lg-6">
        				<h3>Quer receber mais informações?</h3>
        				<p class="text-body">Entre em contato!</p>
        			</div>
        			<div class="col-lg-6 form-fields">
        				<form>
        				  <div class="form-group">
        				    <input type="text" class="form-control" id="name-input" aria-describedby="emailHelp" placeholder="Nome"/>
        				  </div>
        				  <div class="form-group">
        				    <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Endereço de e-mail"/>
        				  </div>
        				  <div class="form-group">
        				    <input type="text" class="form-control" id="phone-input" placeholder="Telefone"/>
        				  </div>
        				  <button type="submit" class="btn btn-primary btn-block round-btn">Receba nossas ofertas!</button>
        				</form>
        			</div>
        		</div>
        	</section>);
}

export default Form;
