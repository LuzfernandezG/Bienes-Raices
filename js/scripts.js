//querySelector-- selectorres este retorna 0 o 1 elemento
const heading = document.querySelector('#heading')
heading.textContent = 'Nuevo Heading';
console.log(heading);


//queryselectorAll-- este te retorna todos los resultados que concuerden con el selector

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')
nuevoEnlace.href = 'nuevo-enlace.html';

nuevoEnlace.textContent = 'Un nuevo enlace';

nuevoEnlace.classList.add('navegacion__enlace');

const navegacion= document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos--movimientos del usuario y automaticos

/*console.log(1);
window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos

    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded',function(){ //este solo espera por el HTML, mas no CSS O IMAGENES

    console.log(4);
})

console.log(5);

window.onscroll = function(evento){
    console.log(evento);
}*/

//seleccionar elementos y asociar un evento
 /*const btnEnviar = document.querySelector('.boton--primario');
 btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('enviando Formulario');
 });*/

 //Eventos -objeto
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

 const nombre = document.querySelector('#nombre');
 const email = document.querySelector('#email');
 const mensaje = document.querySelector('#mensaje');
 const formulario = document.querySelector('.formulario');

 nombre.addEventListener('input', leerTexto);
 email.addEventListener('input', leerTexto);
 mensaje.addEventListener('input', leerTexto);


//lee y almacena en el objeto 
function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
        //console.log(datos);
}


//EVENTO DE SUBMIT-- USADO PRINCIPALMENTE PARA FORMULARIOS
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    //VALIDAR
    const {nombre,email, mensaje} = datos;
    if(nombre == '' || email ==''|| mensaje ==''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        return;
    } 
//crear la alerta de enviar correctamente
mostrarAlerta('mensaje enviado correctamente');

});


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

//desaparece despues de los 5 segundos
    setTimeout(()=>{
        alerta.remove();
    },5000);

}



