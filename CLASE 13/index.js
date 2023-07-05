console.log("ejemplo....");
console.info("ejemplo....");
console.warn("advertencia");
console.error("error");
// comentamos una linea
/* parrafo */

/* Metodo para acceder al DOM = document 
getElementById() => buscar elemento de html con el ID espeficado;
*/

/* DECLARACIÓN DE VARIABLES EN JS 

const => constante

var - let => variable

*/

const parrafo = document.getElementById('parrafo');

parrafo.style.color="orange";
console.log(parrafo.innerText)
//innerText solo texto
//innerHTML etiquetas de html
//parrafo.innerHTML='<b>Prueba</b> Prueba de texto cambiado'

setTimeout(()=>{
    parrafo.textContent += ' Prueba dos de texto';
}, 3000)

//añadir cualquier evento a un elemento de html addEventListener

parrafo.addEventListener('click', function(){
    parrafo.style.color="red"
});

// getElementsByName => por etiqueta de html
document.getElementsByName('p');
// getElementById() => buscar elemento de html con el ID espeficado;
// getElementsByClassName() => por clase de elemento
//getElementsByTagsName
document.getElementsByClassName('p');

//Metodos Modernos
//document.querySelector(); coincide 1 elemento de css
//document.querySelectorAll(); coincide todos elemento de css

const parrafo2 = document.querySelectorAll("#parrafo");
console.log(parrafo2)


setTimeout(()=>{

    document.getElementById("loader").style.display='none';  
    

}, 5000)