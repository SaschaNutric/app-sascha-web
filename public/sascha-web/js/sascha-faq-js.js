$(document).ready(function(){

        $.ajax({
          url: 'https://api-sascha.herokuapp.com/negocio/7',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
             res.data.map(function(negocio) {
                  let correo = document.getElementById('negocio-correo');
                  let telefono = document.getElementById('negocio-telefono');
                  let logo = document.getElementById('logoW');
                  correo.innerHTML = `${negocio.correo}`;
                  logo.src= `${negocio.url_logo}`;
                  telefono.innerHTML = ` ${negocio.telefono}`;



              })
          }
      }) 

        $.ajax({
          url: 'https://api-sascha.herokuapp.com/redsociales',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let contredes = document.getElementById('contenedor-redes-sociales');
              res.data.map(function(redsocial) {
                  vistaredes = `<li><a href="${redsocial.url_base}"><img src="${redsocial.url_logo}">${redsocial.usuario}</a></li>`;
                 contredes.innerHTML = contredes.innerHTML +  vistaredes;
              })
          }
      })
   
   
	       $.ajax({
          url: 'https://api-sascha.herokuapp.com/ayudas',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let contayudas = document.getElementById('accordion');
              res.data.map(function(ayuda) {
                  ayudas = `  <div class="panel panel-default">
									   <a data-toggle="collapse" data-parent="#accordion" href="#ayuda${ayuda.id_ayuda}"> <div class="panel-heading">
									      <h4 class="panel-title">
									        ${ayuda.pregunta}
									      </h4>
									    </div></a>
									    <div id="ayuda${ayuda.id_ayuda}" class="panel-collapse collapse ">
									      <div class="panel-body">${ayuda.respuesta}</div>
									    </div>
									  </div>`;
                  contayudas.innerHTML = contayudas.innerHTML + ayudas;
              })
          }
      })
})