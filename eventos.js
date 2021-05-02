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

//-------------------------------------------------



// modo-oscuro
// Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

const button = document.getElementById('switch-button');
const title = document.getElementsByClassName('title-mode')[0];
const sun = document.getElementsByClassName('fa-sun')[0];
const moon = document.getElementsByClassName('fa-moon')[0];

const switchMode = (event) => {
    document.body.classList.toggle('dark');
    const mode = document.body.getAttribute('class');
       
    if(mode == 'dark') {

        document.body.style='background-color: #000; color: #FFF';
        button.style ='background-color: #FFF; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border:1px grey solid; filter: drop-shadow(0px 0px 3px ivory); ';
        title.innerHTML='Modo Oscuro';
        moon.style='display: none';
        sun.style='color: black; font-size: 30px;';

    } else { 

        document.body.style='background-color: #FFF; color: #000';
        button.style ='background-color: black; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border:1px grey solid; filter: drop-shadow(0px 0px 5px grey); ';
        title.innerHTML='Modo Claro';
        sun.style='display: none';
        moon.style='color: white; font-size: 25px;';
    }

}


button.addEventListener('click', switchMode);

// scroll ----SALTEAR----
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange



// imagenes
// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.



// imagenes-2
// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.



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

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)


//-------------------------------------EVENTOS DE FORMULARIO------------------------------------------------

// Kilómetros a Millas
// Crear una página que:

// Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
// Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que ki´lómetro es 0.62 millas, y una milla es 1.61 kilómetros.

// const calculo=(event)=>{
//   let kilometros=document.getElementById('kilometros').value;
//   let millas=document.getElementById('millas').value;

//   if(event.target.name==='kilometros'){

//     console.log(kilometros*1.61);

//   }  else if (event.target.name==='millas'){

//     console.log(millas*0.62);

//   } 
// };

// kilometros.addEventListener('change',calculo);
// millas.addEventListener('change',calculo);



//---------------opcion MARIANA

// const calculo=(event)=>{
//   let kilometros=document.getElementById('kilometros').value;
//   let millas=document.getElementById('millas').value;

//   if(event.target.name==='kilometros'){
//     document.getElementById('millas').value=kilometros*1.61;

//   }  else if (event.target.name==='millas'){
//     document.getElementById('kilometros').value=millas*0.62;

//   } 
// };

// kilometros.addEventListener('change',calculo);
// millas.addEventListener('change',calculo);

// -------------opcion ADRIAN

// let kilometros=document.getElementById('kilometros');
// let millas=document.getElementById('millas');

// const calculo=(event)=>{
//     if(event.target.name==='kilometros') {
//    millas.value = kilometros.value * 1.61;

//   }  else if (event.target.name==='millas') {
//     kilometros.value = millas.value * 0.62;

//   } 
// };

// kilometros.addEventListener('keyup',calculo);
// millas.addEventListener('keyup',calculo);


//-----------------------------------------------------------------------


// RGB
// Crear una página que:

// Tenga tres inputs numéricos, con valor mínimo 0 y valor máximo 255, uno para el valor R (red), otro para el valor G (green) y otro para el valor B (blue).
// Todos los inputs comiencen con el valor 255.
// Cuando se modifica algún input, se cambie el color de fondo del body con el color que se forma a partir de dichos valores.

// ------------------VERSION CON FUNCION

// const redInput = document.getElementById('red');
// let red = redInput.value;
// const greenInput = document.getElementById('green');
// let green = greenInput.value;
// const blueInput = document.getElementById('blue');
// let blue = blueInput.value;
// const fondo = document.querySelector('body');
// let colorRgb=`rgb(${red}, ${green}, ${blue})`;
// fondo.style.backgroundColor=colorRgb;

// const cambioColor = (r, g, b) => {

//     fondo.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
// }

// redInput.addEventListener('input', () => {
//     red=redInput.value;
//     green=greenInput.value;
//     blue=blueInput.value;
//     cambioColor(red, green, blue);//     
// });

// greenInput.addEventListener('input', () => {
//     red=redInput.value;
//     green=greenInput.value;
//     blue=blueInput.value;
//    cambioColor(red, green, blue);
// });

// blueInput.addEventListener('input', () => {
//     red=redInput.value;
//     green=greenInput.value;
//     blue=blueInput.value;
//     cambioColor(red, green, blue);
// });

// -------------VERSION SIN FUNCION


// const redInput = document.getElementById('red');
// let red = redInput.value;
// const greenInput = document.getElementById('green');
// let green = greenInput.value;
// const blueInput = document.getElementById('blue');
// let blue = blueInput.value;
// const fondo = document.querySelector('body');
// let colorRgb=`rgb(${red}, ${green}, ${blue})`;
// fondo.style.backgroundColor=colorRgb;


// redInput.addEventListener('keyup', () => {
//     red=redInput.value;
//     green=greenInput.value;
//     blue=blueInput.value;
//     let colorRgb=`rgb(${red}, ${green}, ${blue})`;
//     fondo.style.backgroundColor=colorRgb;
// });

// greenInput.addEventListener('keyup', () => {
//     red=redInput.value;
//     green=greenInput.value;
//     blue=blueInput.value;
//     let colorRgb=`rgb(${red}, ${green}, ${blue})`;
//     fondo.style.backgroundColor=colorRgb;
    
// });

// blueInput.addEventListener('keyup', () => {
//     red=redInput.value;
//     green=greenInput.value;
//     blue=blueInput.value;
//     let colorRgb=`rgb(${red}, ${green}, ${blue})`;
//     fondo.style.backgroundColor=colorRgb;
// });




//---------------------------codigo RESET PAGINA CECI
// function reloadPage(){
//     window.location.reload();
// }
// reset.onclick= reloadPage; //Para resetear la página con el "onclick"

//-----------------------------------------------------------------------

// Todo
// Crear una página que:

// Tenga un input, un botón que diga Crear todo y una lista.
// Al presionar el botón, si el input no está vacío, se agregue un ítem a la lista con el contenido del input y se borre el contenido del input.



// Agregar imágenes
// Crear una página que:

// Tenga un input para la url de la imagen, un botón que diga Agregar imagen y un contenedor flexible donde mostrar imágenes como en una grilla.
// Al presionar el botón, si el input no está vacío, se agregue una imagen al contenedor cuyo src es el contenido del input y se borre el contenido del input.
// Al hacer click en una imagen, esta se elimine.



// Comentario
// Crear una página que:

// Tenga un textarea, un texto pequeño debajo de este y un botón que diga Enviar.
// El texto comience diciendo 0/240 caracteres.
// Cuando se escribe algo en el textarea, se actualice el texto para reflejar la cantidad de caracteres restantes.
// Al presionar el botón, si hay 240 caracteres o menos, se borre el contenido del input y se actualice el texto para que diga Comentario enviado.
// El color del borde del textarea cambie de la siguiente forma:
// normal si está vacío
// verde si tiene texto y 240 caracteres o menos
// rojo si tiene más de 240 caracters



// Conversor avanzado
// Crear una página que:

// Tenga
// un input para ingresar el valor a convertir
// un select para seleccionar la unidad del valor convertido
// un select para seleccionar la unidad a convertir
// un botón que diga Intercambiar
// un texto que muestre el resultado
// Cuyos selects tengan las siguientes opciones:
// Kilómetros (km)
// Metros (m)
// Decímetros (dm)
// Centímetros (cm)
// Milímetros (mm)
// Ambos select comiencen con la opción metros seleccionada y el input comience con el valor 1.
// Al seleccionar una nueva opción en cualquiera de los select o al modificar el valor del input, se actualice el texto con el resultado de la conversión del valor ingresado de una unidad a la otra.
// Al clickear el botón Intercambiar se intercambien las opciones de los selects y se actualice el texto.




// TIP

// Para realizar este ejercicio, el value de cada option del select deben ser los siguiente:

// Para Kilómetros, el value debe ser 1000
// Para Metros, el value debe ser 1
// Para Decímetros, el value debe ser 0.1
// Para Centímetros, el value debe ser 0.01
// Para Milímetros, el value debe ser 0.001
// La conversión se realiza con la fórmula: VALOR_INGRESADO * VALOR_UNIDAD / VALOR_UNIDAD_A_CONVERTIR.




// Card dinámica
// Crear una página que:

// Tenga un input para la url de la imagen, un input para el título, un textarea para la descripción, un input para la url externo y un checkbok que diga Link externo
// Tenga una card simple y estilizada con: imagen, título, descripción, y un link que diga Ver más.
// A medida que se modifiquen los campos, se modifique respectivamente los distintos elementos de la card.
// Si el checkbox no está seleccionado, el link Ver más no se muestre y el input de la url externa se deshabilite.
// Si el checkbox está seleccionado, el link Ver más se muestre y el input de la url externa se habilite.



// Selector de imágenes
// Crear una página que:

// Tenga un select con categorías de imágenes (por ejemplo, animales, comida, paisajes, etc) y un contenedor con al menos 9 imágenes correspondientes a las distintas categorías, mostradas como grilla.
// El select tenga la opción Todas y comience con dicha opción seleccionada.
// Al seleccionar una nueva opción en el select se oculten aquellas imágenes que no pertecen a la categoría seleccionada y se muestren las que sí.
// Al seleccionar Todas se muestren todas las imágenes.
// TIP: Agregar a cada imagen un atributo data-categoria cuyo valor se corresponda con el atributo value del option de la categoría correspondiente.

// Buscador
// Crear una página que:

// Tenga un input y un contenedor con al menos 9 imágenes mostradas como grilla y un texto para mostrar la cantidad de resultados encontrados.
// Al escribir algo en el input aquellas imágenes cuyo alt contiene parte o todo el texto ingresado se muestran, mientras las demás se ocultan.
// La búsqueda ignora mayúsculas y minúsculas.
// Al vaciar el input, se muestran todas las imágenes.
// Al realizar la búsqueda se actualiza el texto con la cantidad de imágenes que se están mostrando, de modo que diga, por ejemplo, 3 resultados encontrados.

// Por ejemplo, si una imagen tiene un alt que dice Oso koala comiendo eucaliptus y se busca ko dicha imagen debe mostrarse.




// Filtro de imágenes
// Crear una página que:

// Tenga una grilla de imágenes y al menos 4 checkbox con categorías (por ejemplo, animales, comida, paisajes, etc).
// Al seleccionar un checkbox se actualice la grilla, mostrando aquellas imágenes que pertenezcan a las categorías seleecionadas.
// Al deseleccionar todos los checkbox se muestren todas las imágenes
// TIP: Agregar a cada imagen un atributo data-categoria cuyo valor se corresponda con el atributo value del checkbox de la categoría correspondiente.



// Feedback (Validación)
// Debemos crear una encuesta de satisfacción al cliente para un portal de ventas basado en 4 preguntas que nos determinará qué tan contento está el cliente con nuestro servicio. Las respuestas deben ser radio buttons y cada grupo responderá a una pregunta específica.

// ¿Qué tan rápido solucionamos tu problema?

// Demoraron mucho
// Lo recibí en el tiempo estimado
// Super rápido
// ¿Como recibiste el producto?

// Tuvo un desperfecto
// Era tal cual la publicación
// Superó mis expectativas
// ¿Cómo calificarías el asesoramiento de nuestros representantes?

// No supo responder adecuadamente mis preguntas
// El representante respondió adecuadamente
// Recibí un excelente asesoramiento
// ¿Recomendarías nuestro portal a otro usuario?

// No lo creo
// Solo para casos puntuales
// ¡Si, por supuesto!
// Una vez que obtengamos las respuestas mostraremos con una alerta el nivel de satisfacción con nuestro servicio, siendo que:

// Las respuestas negativas tendrán un valor de 1
// Las respuestas neutras un valor de 2
// Mientras que las respuestas positivas un valor de 3.
// Por lo que el resultado deberá corresponder al siguiente para el puntaje total:

// 4: Sumamente insatisfecho
// 5-6: Insatisfecho
// 6-8: Conforme
// 8-10: Satisfecho
// 11-12: Muy satisfecho




// Tarjeta de crédito (Validación)
// Realizaremos una validación sobre el formulario del ejercicio Pago.

// Aplicaremos las siguientes validaciones:

// Paso 1: Campo del número de la tarjeta de crédito.

// El campo debe tener 16 caracteres. Al salirse del foco de este input, y en el caso de no cumplir con este requerimiento, el input debe colorearse de rojo, le mostraremos un mensaje de error que la tarjeta debe contener 16 caracteres y borraremos el contenido el input.
// Adicionaremos un input de tipo selector con 2 opciones. Visa y Mastercard. Esto no debe estar disponible para la edición del usuario, pero aplicaremos un cambio dada la siguiente condición: Si el número ingresado por el usuario inicia con 5. Será Mastercard, si comienza con 3 o 4 será visa. Y si inicia con otro valor mostraremos un mensaje de error indicando el número ingresado es erróneo.
// Paso 2: Campo nombre.

// Validar que el campo de nombre posea solo texto. Lo validaremos con una regex.
// Paso 3: CCV.

// Validar que solo posea solo números
// Que su contenido sea 3 caracteres en el caso de visa y 4 en el caso de mastercard. Por lo que habilitaremos esta opción una vez haya completado correctamente el campo numérico.

// En el Paso 1: Usaremos blur y change

// Mientras que las validaciones del Paso 2 y Paso 3 las haremos antes de intentar enviar el formulario.




// Registro (Validación)
// Antes de enviar el formulario de registro de cliente creado con anterioridad, realizaremos algunas validaciones sobre este. Pero primero, agregaremos una etiqueta small debajo de cada input con un color rojo y de inicio no va a visualizarse.

// Los errores y las validaciones a mostrar deben ser las siguientes:

// Nombre: "El campo nombre solo puede contener texto"
// Apellido: "El campo apellido solo puede contener texto"
// DNI: "El DNI no puede ser mayor a 8 caracteres"
// Email: "El formato del email no es válido"
// Contraseña: En este caso utilizaremos 2. "La contraseña debe tener al menos 8, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial" y "Las contraseñas no coinciden"
// Términos y condiciones de uso: "Debe aceptar los términos y condiciones"
// En el caso de que alguno de los inputs no cumpla con las características solicitadas, debemos visualizar el error correspondiente a ese input.

// Usar las siguientes funciones para validar los datos con expresiones regulares:

// const esEmailValido = (email) => {
//   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   return regex.test(email.toLowerCase())
// }

// const esPasswordValida = (password) => {
// //   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm