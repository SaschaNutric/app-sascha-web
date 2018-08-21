

$(document).ready(function(){
      $.ajax({
          url: 'https://api-sascha.herokuapp.com/especialidades',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let selectEstados = document.getElementById('especialidad');
              res.data.map(function(especialidad) {
                  let option = `<option value="${especialidad.id_especialidad}">${especialidad.nombre}</option>`;
                  selectEstados.innerHTML = selectEstados.innerHTML + option;
              })
          }
      })
      
      $.ajax({
          url: 'https://api-sascha.herokuapp.com/estadociviles',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let selectEstadoCivil = document.getElementById('estado_civil');
              res.data.map(function(estado) {
                  let option = `<option value="${estado.id_estado_civil}">${estado.nombre}</option>`;
                  selectEstadoCivil.innerHTML = selectEstadoCivil.innerHTML + option;
              })
          }
      })


    $.ajax({
        url: 'https://api-sascha.herokuapp.com/slides',
        contentType: 'application/json',
        type: 'GET',
        success: function(res, status, xhr) {
           let contrecomendacion = document.getElementById('contenedor-slider');
              res.data.map(function(slider) {
                  vistarecomendacion = `  
    <div class="item ">
      <img src="${slider.url_imagen}" alt=" ">
      <div class="carousel-caption">

      </div>
    </div>`;   
                 contrecomendacion.innerHTML = contrecomendacion.innerHTML +  vistarecomendacion;
              $(".item:first-child").addClass( "active" );
               })

        },
        error: function(res, status, xhr) {
            console.log(res)
            console.log(status)
            const respuesta = JSON.parse(res.responseText);

        }
    })

       $.ajax({
        url: 'https://api-sascha.herokuapp.com/tipoparametros/filtrables',
        contentType: 'application/json',
        type: 'GET',
        success: function(res, status, xhr) {
            let contrecomendacion = document.getElementById('otros-filtros');
                res.data.map(function(filtro) {
                    let parametros = '';
                    filtro.parametros.forEach(function (parametro) {
                        parametros += `<div class="checkbox">
                                    <label>
                                        <input type="checkbox" value="${parametro.id_parametro}">
                                        ${parametro.nombre}
                                    </label>
                                </div>`
                    })
                    vistarecomendacion = `<li>

                     <div class="panel panel-default">
                     <a data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#filtro${filtro.id_tipo_parametro}"> <div class="panel-heading">
                        <h4 class="panel-title">
                          ${filtro.nombre}
                        </h4>
                      </div></a>
                      <div id="filtro${filtro.id_tipo_parametro}" class="panel-collapse collapse ">
                         ${parametros} 
                      </div>
                    </div>  
                    </li>`;   
                    contrecomendacion.innerHTML = contrecomendacion.innerHTML +  vistarecomendacion;
                })
        },
        error: function(res, status, xhr) {
            console.log(res)
            console.log(status)
            const respuesta = JSON.parse(res.responseText);

        }
    })


          $.ajax({
          url: 'https://api-sascha.herokuapp.com/servicios',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let contservicio = document.getElementById('contenedor-servicio');
              res.data.map(function(servicio) {
                planS= servicio.plan_suplemento;
              planE = servicio.plan_ejercicio;
              if(planS == null ){
                  planS = "No incluye";
              }
              else{
                planS = servicio.plan_suplemento.nombre;
              }
              
              if(planE == null ){
                  planE = "No incluye";
              }
              else{
                planE = servicio.plan_ejercicio.nombre;
              }
                  vistaservicio = `<div class="servicio">
                                      <img src="${servicio.url_imagen}">
                                      <h3>${servicio.nombre}</h3>
                                      <p>${servicio.descripcion}</p>
                                      <h4>Incluye:</h4>
                                      <ul>
                                        <li>Dieta ${servicio.plan_dieta.nombre}</li>
                                        <li>Plan de ejercicios ${planE} </li>
                                        <li>Plan de suplementos ${planS}</li>
                                        <li>Duracion: ${servicio.numero_visitas} visitas</li>
                                        <li>Precio: ${servicio.precio} Bs</li>

                                      </ul>
                                   </div>`;
                  contservicio.innerHTML = vistaservicio + contservicio.innerHTML;
              })
          }
      })

    $.ajax({
        url: 'https://api-sascha.herokuapp.com/contenidos',
        contentType: 'application/json',
        type: 'GET',
        success: function (res, status, xhr) {
            let contrecomendacion = document.getElementById('contenedor-recomendaciones');
            res.data.map(function(recomendacion) {
                vistarecomendacion = `<div class="recomendacion">
                    <img src="${recomendacion.url_imagen}">
                    <div style="    display: flex;
    flex-direction: column;">
                    <h2>${recomendacion.titulo}</h2>
                    <p >${recomendacion.texto}</div>
                    </div>`;
                contrecomendacion.innerHTML = contrecomendacion.innerHTML +  vistarecomendacion;
            })
        }
    })



        $.ajax({
          url: 'https://api-sascha.herokuapp.com/negocio/7',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
             res.data.map(function(negocio) {
                  let correo = document.getElementById('negocio-correo');
                  let telefono = document.getElementById('negocio-telefono');
                  let logo = document.getElementById('logoW');
                  let mision = document.getElementById('negocio-mision');
                  let vision = document.getElementById('negocio-vision');
                  correo.innerHTML = `${negocio.correo}`;
                  logo.src= `${negocio.url_logo}`;
                  telefono.innerHTML = ` ${negocio.telefono}`;
                  mision.innerHTML = ` ${negocio.mision}`;
                  vision.innerHTML = ` ${negocio.vision}`;


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
          url: 'https://api-sascha.herokuapp.com/generos',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let selectGeneros = document.getElementById('genero');
              res.data.map(function(genero) {
                  let option = `<option value="${genero.id_genero}">${genero.nombre}</option>`;
                  selectGeneros.innerHTML = selectGeneros.innerHTML + option;
              })
          }
      })
  })

function buscar(){
  var nombre = document.getElementById("nombre").value;
          duracion = document.getElementById("duracion").value;
          var pDesde = 0;
          pDesde = document.getElementById("precio-desde").value;
          pHasta = document.getElementById("precio-hasta").value;
          select = document.getElementById("especialidad").value;
          if(pHasta === ''){
            pHasta = 99999999999999;
          }

          if(pDesde === ''){
            pDesde = 0;
          }
          $.ajax({
          url: 'https://api-sascha.herokuapp.com/servicios',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let contservicio = document.getElementById('contenedor-servicio');
              contservicio.innerHTML = " ";
              res.data.map(function(servicio) {
                  if (nombre === ''){
                    if(select == 0){
                  servicio.especialidad.id_especialidad = 0;
                }
                if(duracion === ''){
                     if ( parseInt(servicio.precio) >= pDesde  && parseInt(servicio.precio) <= pHasta && servicio.especialidad.id_especialidad == select )
                {
                    planS= servicio.plan_suplemento;
              planE = servicio.plan_ejercicio;
              if(planS == null ){
                  planS = "No incluye";
              }
              else{
                planS = servicio.plan_suplemento.nombre;
              }
              
              if(planE == null ){
                  planE = "No incluye";
              }
              else{
                planE = servicio.plan_ejercicio.nombre;
              }
                  vistaservicio = `<div class="servicio">
                                      <img src="${servicio.url_imagen}">
                                      <h3>${servicio.nombre}</h3>
                                      <p>${servicio.descripcion}</p>
                                      <h4>Incluye:</h4>
                                      <ul>
                                        <li>Dieta ${servicio.plan_dieta.nombre}</li>
                                        <li>Plan de ejercicios ${planE} </li>
                                        <li>Plan de suplementos ${planS}</li>
                                        <li>Duracion: ${servicio.numero_visitas} visitas</li>
                                        <li>Duracion: ${servicio.precio} Bs</li>
                                      </ul>
                                   </div>`;
                  contservicio.innerHTML = vistaservicio + contservicio.innerHTML;
                }
                }
                if ( servicio.numero_visitas == duracion && parseInt(servicio.precio) >= pDesde  && parseInt(servicio.precio) <= pHasta)
                {
                    planS= servicio.plan_suplemento;
              planE = servicio.plan_ejercicio;
              if(planS == null ){
                  planS = "No incluye";
              }
              else{
                planS = servicio.plan_suplemento.nombre;
              }
              
              if(planE == null ){
                  planE = "No incluye";
              }
              else{
                planE = servicio.plan_ejercicio.nombre;
              }
                  vistaservicio = `<div class="servicio">
                                      <img src="${servicio.url_imagen}">
                                      <h3>${servicio.nombre}</h3>
                                      <p>${servicio.descripcion}</p>
                                      <h4>Incluye:</h4>
                                      <ul>
                                        <li>Dieta ${servicio.plan_dieta.nombre}</li>
                                        <li>Plan de ejercicios ${planE} </li>
                                        <li>Plan de suplementos ${planS}</li>
                                        <li>Duracion: ${servicio.numero_visitas} visitas</li>
                                        <li>Duracion: ${servicio.precio} Bs</li>
                                      </ul>
                                   </div>`;
                  contservicio.innerHTML = vistaservicio + contservicio.innerHTML;
                }
                
  }
    else
    {



       var cadena = reemplazarAcentos(servicio.nombre.toUpperCase());
       var cadenab = nombre.toUpperCase();
       var arreglo = cadenab.split(" ");
       console.log(arreglo);
       console.log(cadena);

       for (var i=0; i<arreglo.length; i++){
           var comparar = arreglo[i].toUpperCase();
           console.log(cadena.indexOf(comparar) > -1);
           if(cadena.indexOf(comparar) > -1){
            console.log("coloca la cadena");


            if(select == 0){
                  servicio.especialidad.id_especialidad = 0;
                }
                if(duracion === ''){
                     if ( parseInt(servicio.precio) >= pDesde  && parseInt(servicio.precio) <= pHasta && servicio.especialidad.id_especialidad == select )
                {
                    planS= servicio.plan_suplemento;
              planE = servicio.plan_ejercicio;
              if(planS == null ){
                  planS = "No incluye";
              }
              else{
                planS = servicio.plan_suplemento.nombre;
              }
              
              if(planE == null ){
                  planE = "No incluye";
              }
              else{
                planE = servicio.plan_ejercicio.nombre;
              }
                  vistaservicio = `<div class="servicio">
                                      <img src="${servicio.url_imagen}">
                                      <h3>${servicio.nombre}</h3>
                                      <p>${servicio.descripcion}</p>
                                      <h4>Incluye:</h4>
                                      <ul>
                                        <li>Dieta ${servicio.plan_dieta.nombre}</li>
                                        <li>Plan de ejercicios ${planE} </li>
                                        <li>Plan de suplementos ${planS}</li>
                                        <li>Duracion: ${servicio.numero_visitas} visitas</li>
                                        <li>Duracion: ${servicio.precio} Bs</li>
                                      </ul>
                                   </div>`;
                  contservicio.innerHTML = vistaservicio + contservicio.innerHTML;
                }
                }
                if ( servicio.numero_visitas == duracion && parseInt(servicio.precio) >= pDesde  && parseInt(servicio.precio) <= pHasta)
                {
                    planS= servicio.plan_suplemento;
              planE = servicio.plan_ejercicio;
              if(planS == null ){
                  planS = "No incluye";
              }
              else{
                planS = servicio.plan_suplemento.nombre;
              }
              
              if(planE == null ){
                  planE = "No incluye";
              }
              else{
                planE = servicio.plan_ejercicio.nombre;
              }
                  vistaservicio = `<div class="servicio">
                                      <img src="${servicio.url_imagen}">
                                      <h3>${servicio.nombre}</h3>
                                      <p>${servicio.descripcion}</p>
                                      <h4>Incluye:</h4>
                                      <ul>
                                        <li>Dieta ${servicio.plan_dieta.nombre}</li>
                                        <li>Plan de ejercicios ${planE} </li>
                                        <li>Plan de suplementos ${planS}</li>
                                        <li>Duracion: ${servicio.numero_visitas} visitas</li>
                                        <li>Duracion: ${servicio.precio} Bs</li>
                                      </ul>
                                   </div>`;
                  contservicio.innerHTML = vistaservicio + contservicio.innerHTML;
                }

             return;
           }
       }
     }

              })
          }
      })
}

function buscarParametros(){
  buscarP = new Array();
  $("input:checkbox:checked").each(   
    function() {
        console.log(parseInt(this.value));
        buscarP.push(this.value);
    }
);

            $.ajax({
          url: 'https://api-sascha.herokuapp.com/servicios',
          contentType: 'application/json',
          type: 'GET',
          success: function (res, status, xhr) {
              let contservicio = document.getElementById('contenedor-servicio');
              contservicio.innerHTML = " ";
              res.data.map(function(servicio) {
              planS= servicio.plan_suplemento;
              planE = servicio.plan_ejercicio;
              parametros = new Array();
              servicio.parametros.map(function(parametro) {
                          parametros.push(parseInt(parametro.id_parametro));
                        }) 
                     for (var i=0; i<buscarP.length; i++){
           var comparar = buscarP[i];
           console.log(parametros);
           console.log(comparar);
           console.log(parametros.includes(parseInt(comparar)));
           if(parametros.includes(parseInt(comparar))){
            if(planS == null ){
                  planS = "No incluye";
              }
              else{
                planS = servicio.plan_suplemento.nombre;
              }
              
              if(planE == null ){
                  planE = "No incluye";
              }
              else{
                planE = servicio.plan_ejercicio.nombre;
              }
                  vistaservicio = `<div class="servicio">
                                      <img src="${servicio.url_imagen}">
                                      <h3>${servicio.nombre}</h3>
                                      <p>${servicio.descripcion}</p>
                                      <h4>Incluye:</h4>
                                      <ul>
                                        <li>Dieta ${servicio.plan_dieta.nombre}</li>
                                        <li>Plan de ejercicios ${planE} </li>
                                        <li>Plan de suplementos ${planS}</li>
                                        <li>Duracion: ${servicio.numero_visitas} visitas</li>
                                        <li>Duracion: ${servicio.precio} Bs</li>
                                      </ul>
                                   </div>`;
                  contservicio.innerHTML = vistaservicio + contservicio.innerHTML;
           }
       }
         
              })
          }
      })

}




  function limpiarFormularioSuscripcion() {
      $('#email').val('');
      $('#password').val('');
      $('#password_confirmation').val('');
      $('#cedula').val('');
      $('#first_name').val('');
      $('#last_name').val('');
      $('#fecha_nacimiento').val('');
      $('#telefono').val('');
      $('#direccion').val('');
      document.getElementById('genero').selectedIndex = 0;
      document.getElementById('estado').selectedIndex = 0; 
  }



  function suscribir() {
    let cliente = {
      correo:           $('#email').val(),
      contraseña:       $('#password').val(),
      cedula:           $('#cedula').val(),
      nombres:          $('#first_name').val(),
      apellidos:        $('#last_name').val(),
      fecha_nacimiento: $('#fecha_nacimiento').val(),
      telefono:         $('#telefono').val(),
      direccion:        $('#direccion').val(),
      id_genero:        $('select[name=genero]').val(),
      id_estado_civil:  $('select[name=estado_civil]').val(),
      id_estado:        1 
    }
    console.log(cliente);
    
    $.ajax({
        url: 'https://api-sascha.herokuapp.com/suscripciones',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify(cliente),
        success: function (res, status, xhr) {
            swal(res.data.mensaje, '', 'success');
            limpiarFormularioSuscripcion();
        },
        error: function (res, status, xhr) {
            const respuesta = JSON.parse(res.responseText);
            swal(status, respuesta.data.mensaje, 'error');
            limpiarFormularioSuscripcion();
        }
    })
    
  }

  var reemplazarAcentos=function(cadena)
{
  var chars={
    "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
    "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
    "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
    "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
  var expr=/[áàéèíìóòúùñ]/ig;
  var res=cadena.replace(expr,function(e){return chars[e]});
  return res;
}