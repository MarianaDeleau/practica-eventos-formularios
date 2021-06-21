//----------------DOM - Eventos----------------

//   1- playlist
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada


//VERSION PARA PEDIR PROMPTS DE A UNO

// const cancion1=prompt('Ingrese una canción');
// const lista = document.getElementsByTagName('ul');
// lista[0].innerHTML=`<li> ${cancion1} </li>`;


// const cancion1=prompt('Ingrese una canción');
// const lista = document.querySelector('ul');
// lista.innerHTML=`<li> ${cancion1} </li>`;



//VERSION PARA PEDIR PROMPTS TODOS JUNTOS

// const lista = document.querySelector('ul');
// let items = "";
// for(let i=0; i<5; i++) {

//   const cancion=prompt('Ingrese una canción');
//   items +=`<li> ${cancion} </li>`;
// }

// lista.innerHTML=items;

//-------------------------------



// 2- contador
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.


//     //VERSION OK BELU        

//     const elementoContador = document.getElementById('contador')
//     let contador = parseInt(elementoContador.innerHTML)    // DUDA
//     const botonMenos1 = document.getElementById('boton-1')
//     const botonMas1 = document.getElementById('boton+1')
//     const botonMenos5 = document.getElementById('boton-5')
//     const botonMas5 = document.getElementById('boton+5') 
//     const botonMenos10 = document.getElementById('boton-10')
//     const botonMas10 = document.getElementById('boton+10')

//     botonMenos1.addEventListener('click', () => {
//       contador = contador - 1;
//       elementoContador.innerHTML = contador;
//     })
//     botonMas1. addEventListener('click', () => {
//         contador = contador + 1;
//         elementoContador.innerHTML = contador;
//     })
//    botonMenos5. addEventListener('click', () => {
//         contador = contador - 5;
//         elementoContador.innerHTML = contador;
//     })
//     botonMas5. addEventListener('click', () => {
//         contador = contador + 5;
//         elementoContador.innerHTML = contador;
//     })
//     botonMenos10. addEventListener('click', () => {
//         contador = contador - 10;
//         elementoContador.innerHTML = contador;
//     })
//     botonMas10. addEventListener('click', () => {
//         contador = contador + 10;
//         elementoContador.innerHTML = contador;
//     })



// -------------------PRUEBAS PARA UN SOLO ADDEVENTLISTENER


// const buttons = document.getElementsByClassName('btn-counter');
// const elementRespuesta = document.getElementById('resultado');
// let inputRespuesta = parseInt(elementRespuesta.innerHTML);

// const calculo = (event) => {

//     const button = event.target
//     const qty = button.getAttribute('data-qty');
//     const op = button.getAttribute('data-op');
    
//         if(op === '+') {

//             inputRespuesta = inputRespuesta + parseInt(qty);
//             elementRespuesta.innerHTML = inputRespuesta

//         } else if (op === '-') {

//             inputRespuesta = inputRespuesta - parseInt(qty);
//             elementRespuesta.innerHTML = inputRespuesta

//         } 

// };

// for(let i = 0; i < buttons.length; i++) {

//     buttons[i].addEventListener('click', calculo)

// };



// 3- adivinanza
// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.


// const botonIncorrecta1 = document.getElementById('errada1')
// const botonIncorrecta2 = document.getElementById('errada2')
// const botonCorrecta = document.getElementById('correcta')
// const respuesta = document.getElementById('respuesta')


// //DUDA, AL EVENT LISTENER LE PUEDO PONER EL ID O LA VARIABLE, FUNCIONA EN AMBOS

// errada1.addEventListener('click', () => {
//     botonIncorrecta1.classList.add('incorrecta');
//     botonIncorrecta2.classList.add('incorrecta');
//     botonCorrecta.classList.add('correcta');
//     respuesta.innerHTML='Le erraste!';
//     respuesta.style.fontSize='30px';
//     respuesta.style.color='red';
// });

// errada2.addEventListener('click', () => {
//     botonIncorrecta1.classList.add('incorrecta');
//     botonIncorrecta2.classList.add('incorrecta');
//     botonCorrecta.classList.add('correcta');
//     respuesta.innerHTML='Le erraste!';
//     respuesta.style.fontSize='30px';
//     respuesta.style.color='red';
// });

// botonCorrecta.addEventListener('click', () => {
//     botonCorrecta.classList.add('correcta');
//     respuesta.innerHTML='Correcto!';
//     respuesta.style.fontSize='30px';
//     respuesta.style.color='green';
// });





// 4- paleta
// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

//----------------VERSION ORIGINAL

// const botonRojo = document.getElementById('boton-red')
// botonRojo.style ='background-color: red; width: 100px'
// const botonAmarillo = document.getElementById('boton-yellow')
// botonAmarillo.style ='background-color: yellow; width: 100px'
// const botonVerde = document.getElementById('boton-green')
// botonVerde.style ='background-color: green; width: 100px'
// const botonAzul = document.getElementById('boton-blue')
// botonAzul.style ='background-color: blue; width: 100px'
// const botonRosa = document.getElementById('boton-pink')
// botonRosa.style ='background-color: pimk; width: 100px'
// const botonNaranja = document.getElementById('boton-orange')
// botonNaranja.style ='background-color: orange; width: 100px'
// const divColor=document.getElementById('div-color')
// divColor.style = "height: 600px; width: 600px; border: 1px grey solid; margin-bottom: 20px";

// botonRojo.addEventListener('click', () =>{
//     divColor.style.backgroundColor='red'
// })
// botonAmarillo.addEventListener('click', () =>{
//     divColor.style.backgroundColor='yellow'
// })
// botonVerde.addEventListener('click', () =>{
//     divColor.style.backgroundColor='green'
// })
// botonAzul.addEventListener('click', () =>{
//     divColor.style.backgroundColor='blue'
// })
// botonRosa.addEventListener('click', () =>{
//     divColor.style.backgroundColor='pink'
// })
// botonNaranja.addEventListener('click', () =>{
//     divColor.style.backgroundColor='orange'
// })

//----------------VERSION FOR

// const botonRojo = document.getElementById('boton-red')
// botonRojo.style ='background-color: red; width: 100px'
// const botonAmarillo = document.getElementById('boton-yellow')
// botonAmarillo.style ='background-color: yellow; width: 100px'
// const botonVerde = document.getElementById('boton-green')
// botonVerde.style ='background-color: green; width: 100px'
// const botonAzul = document.getElementById('boton-blue')
// botonAzul.style ='background-color: blue; width: 100px'
// const botonRosa = document.getElementById('boton-pink')
// botonRosa.style ='background-color: pink; width: 100px'
// const botonNaranja = document.getElementById('boton-orange')
// botonNaranja.style ='background-color: orange; width: 100px'
// const divColor=document.getElementById('div-color')
// divColor.style = "height: 600px; width: 600px; border: 1px grey solid; margin-bottom: 20px";
// const buttons = document.getElementsByTagName('button')

// const setColor= (event) => {    
//         const button = event.target;
//         const fondo = button.getAttribute('data-color');
//         divColor.style.backgroundColor=fondo;
//     }

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', setColor)
// }


//-------------------------------------------------


// email (sin leer)
// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

// const mail = document.getElementsByTagName('li');


// const readed = (event) => {
//     const items = event.target
//     items.classList.add('readed');
//     items.classList.remove('negrita');
// }; 


// for(let i = 0; i < mail.length; i++) {
//     mail[i].addEventListener('click', readed)
// }


//-------------------------------------------------


// progreso
// Crear un documento html con

// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%



// const divPadre = document.getElementById('IdPadre');
// const divHijo = document.getElementById('IdHijo');
// const buttons = document.getElementsByClassName('btn-counter');
// const progress = document.getElementById('progreso');
// let widthHijo = "0";
// divHijo.style.width= `${widthHijo}%`;


// const progreso = (event) => {

//     const button = event.target
//     const op = button.getAttribute('data-op');

//     if(op === '+'){
//         widthHijo = parseInt(widthHijo)+10;
//         divHijo.style.width= `${widthHijo}%`;
//         progress.innerText=`${widthHijo}%`
//     } else if (op === '-') {
//         widthHijo = parseInt(widthHijo)-10;
//         divHijo.style.width= `${widthHijo}%`;   
//         progress.innerText=`${widthHijo}%`   
//     }
// }

// for(let i = 0; i < buttons.length; i++) {

//     buttons[i].addEventListener('click', progreso)

// }

// const progresoFlechas = (event) => {

//     if(event.keyCode == '39'){
//         widthHijo = parseInt(widthHijo)+10;
//         divHijo.style.width= `${widthHijo}%`;
//         progress.innerText=`${widthHijo}%`  
//     } else if (event.keyCode == '37') {
//         widthHijo = parseInt(widthHijo)-10;
//         divHijo.style.width= `${widthHijo}%`;
//         progress.innerText=`${widthHijo}%`  
//     }

// }

// document.onkeyup = progresoFlechas

//MUESTRA EL VALOR DEL INPUT SLIDER. 

// const slider = document.getElementById("slider");
// const output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value; 
//   widthHijo = output.innerHTML;
//   divHijo.style.width= `${widthHijo}%`;
//   progress.innerText=`${widthHijo}%`  
// }



//-------------------------------------------------



// modo-oscuro
// Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

// const button = document.getElementById('switch-button');
// const title = document.getElementsByClassName('title-mode')[0];
// const sun = document.getElementsByClassName('fa-sun')[0];
// const moon = document.getElementsByClassName('fa-moon')[0];

// const switchMode = () => {

//     document.body.classList.toggle('dark');
//     const mode = document.body.getAttribute('class');
       
//     if(mode == 'dark') {
//         document.body.style.backgroundColor='#000';
//         document.body.style.color='#FFF';     
//         button.style.backgroundColor ='#FFF'; 
//         button.style.filter='drop-shadow(0px 0px 3px ivory)';
//         title.innerHTML='Modo Oscuro';
//         moon.style='display: none';
//         sun.style='color: black; font-size: 30px;';

//     } else { 
//         document.body.style.backgroundColor='#FFF';
//         document.body.style.color='#000';
//         button.style.backgroundColor ='#000'; 
//         button.style.filter='drop-shadow(0px 0px 3px GREY)';
//         title.innerHTML='Modo Claro';
//         sun.style='display: none';
//         moon.style='color: white; font-size: 25px;';
//     }
    
// };
// button.addEventListener('click', switchMode);

//-------------------------------------------------

// scroll ----SALTEAR----
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange

//-------------------------------------------------

// imagenes
// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.


const chica = document.getElementsByClassName('chica');
const grande = document.getElementsByClassName('grande')[0];
const cambio = (event) => {
        const fotoChica=event.target;
        const srcChica = fotoChica.getAttribute('src');
        const srcGrande = grande.getAttribute('src')
        grande.setAttribute('src' , srcChica)
        fotoChica.setAttribute('src', srcGrande)
}
for(let i = 0; i < chica.length; i++) {

 chica[i].addEventListener('click', cambio)
}


//-------------------------------------------------


// imagenes-2
// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.


// const chica = document.getElementsByClassName('chica');
// const grande = document.getElementsByClassName('grande')[0];
// const cambio = (event) => {
//         const fotoChica=event.target;
//         const srcChica = fotoChica.getAttribute('src');
//         grande.setAttribute('src' , srcChica)
// }
// for(let i = 0; i < chica.length; i++) {

//  chica[i].addEventListener('mouseover', cambio)
// }

//-------------------------------------------------

// peliculas
// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.



// pin
// En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
// Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
// El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
// El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
// El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.




// favoritos
// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.




// color-aleatorio
// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).




// adivinar-numero
// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// const inputNumero= document.getElementById("input");
// const adivinar=document.getElementById("adivinar-numero")
// const numeroAleatorio= (parseInt(Math.random()*9));
// let numeroIngresado;

// inputNumero.addEventListener('change', () => {

// numeroIngresado=parseInt(inputNumero.value);
// //console.log(numeroIngresado);

// if(numeroIngresado>numeroAleatorio) {
//     adivinar.innerText=`el número es más chico. Número ingresado: ${numeroIngresado}`;
//     //alert(`el número es más chico. Número ingresado: ${numeroIngresado}`);
// } else if(numeroIngresado<numeroAleatorio){
//     adivinar.innerText = `el número es más grande. Número ingresado: ${numeroIngresado}`;
//     //alert(`el número es más grande. Número ingresado: ${numeroIngresado}`);
// } else if(numeroIngresado===numeroAleatorio){
//     adivinar.innerText =`Adivinaste!. Número ingresado: ${numeroIngresado}`;
//     //alert(`Adivinaste!. Número ingresado: ${numeroIngresado}`);
// };

// })

//const ingrese=prompt('Ingrese un número');
//const numeroIngresado=parseInt(ingrese);

//console.log(numeroAleatorio)






// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)


// const progresoFlechas = (event) => {

//     if(event.keyCode == '39'){
//         widthHijo = parseInt(widthHijo)+10;
//         divHijo.style.width= `${widthHijo}%`;
//         progress.innerText=`${widthHijo}%`  
//     } else if (event.keyCode == '37') {
//         widthHijo = parseInt(widthHijo)-10;
//         divHijo.style.width= `${widthHijo}%`;
//         progress.innerText=`${widthHijo}%`  
//     }

// }