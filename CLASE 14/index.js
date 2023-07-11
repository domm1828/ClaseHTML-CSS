const div1 = document.querySelector("#contenedorOne");
const div2 = document.querySelector("#contenedorTwo");
const div3 = document.querySelector("#contenedorThree");

const cambiar = document.getElementById("cambiar");
const volver =document.querySelector("#volver");


cambiar.addEventListener("click",function(){
    //div1.style.backgroundColor="orange";
    //div2.style ="background-color:orange!important;width:100%";
   /* div1.setAttribute('style','background-color:orange!important;');
    div2.setAttribute('class','col-12  py-4 bg-secondary ');
    div3.setAttribute('class','col-12  py-4 bg-danger ');*/
    div2.classList.remove("col-8");
    div2.classList.add("col-12");
   
    div3.classList.add("classone");

    cambiar.setAttribute("disabled",true);
    volver.removeAttribute("disabled");
})

volver.addEventListener("click",function(){
    div1.removeAttribute('style');
    /*
    div1.setAttribute('class','col-12  py-4 bg-primary');
    div2.setAttribute('class','col-8  py-4 bg-secondary ');
    div3.setAttribute('class','col-4  py-4 bg-danger ');*/
    
    div3.classList.remove("classone");

    volver.setAttribute("disabled",true);
    cambiar.removeAttribute("disabled");
})

/*
const divAll = document.querySelectorAll(".items");
divAll[0].setAttribute('style','background-color:orange!important;');
divAll[0].setAttribute('data-number',10);
console.log(divAll);
console.log(divAll[0]);*/

//Verificar si el elemento selccionado tiene atributos o no devuelve un valor booleano (true, false)
let vatributos = div1.hasAttributes();
console.log(vatributos);
//Verificar si el elemento selccionado tiene un atributo devuelve un valor booleano (true, false)

let vatributo = div1.hasAttribute('data');
console.log(vatributo);
//Obtenemos los valores de los atributos
console.log(div1.getAttribute("id"))
//Obtenemos en un array todos los atributos usado por el elemento seleccionado
console.log(div1.getAttributeNames())

//ClassList Listado de Clases
console.log(div1.classList);
div1.classList.remove("col-12");
div1.classList.add("col-8");


/**Creación de elementos html desde js node */
//div1.appendChild() // añadir ele elemento como hijo... (div1)
//.removeChild(); //Remover
/** Agregar Elementos en html desde js */
/*
before => antes 
after => despues */
const elementoDiv = document.createElement("div");
elementoDiv.textContent="Agregando Items";
elementoDiv.classList.add("classone");

//div1.before(elementoDiv);
//div1.after(elementoDiv);

/*
prepend => añade como primer hijo
append => añade ultimo hijo
*/
div1.after(elementoDiv);


Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })