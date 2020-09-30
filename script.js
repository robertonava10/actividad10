const lista = document.getElementById("lista");
 
var people = [];
const agregarPersonas = () =>{
    var nombre = document.getElementById("nombre").value;
    lista.innerHTML = '';
     people.push(nombre);
    mostrarValores();
    
   

}




const mostrarValores = ()=> {
    people.map(peoplex =>{
var li = document.createElement('li');
li.innerHTML = peoplex;
lista.appendChild(li);


})
}

mostrarValores();

const borrarValores = () =>{
    lista.innerHTML = '';
    peoplex= [];
}

