//variables
let listaDeAmigos = [];
let cantidadLista;
let numeroGenerado;
let amigoSorteado;
let mostrar;
let intentos;
condicionesIniciales();
//funciones principales
//funcion al presionar Añadir
function agregarAmigo(){
    let añadir = document.getElementById("amigo").value;
    document.getElementById("sorteoAmigoSecreto").removeAttribute("disabled");
    if (añadir == "") {
        //si el input esta vacio
        alert("Por favor, inserte un Nombre");
    }else if(listaDeAmigos.includes(añadir)){
        //si el nombre se repite
        alert("Nombre ya ingresado, favor diferenciar")
    }else{
        //añade el nombre a la lista
        listaDeAmigos.push(añadir);
        console.log(listaDeAmigos);
        //crea la variable para el sorteo de numero
        cantidadLista = listaDeAmigos.length;
        console.log(cantidadLista);
        //muestra cada nombre en una fila
        añadirAmigoTexto("listaAmigos",listaDeAmigos.join('<br>'));
    };
    limpiarCaja();
};
//funcion al presionar sortear amigo
function sortearAmigo(){
    //crea un numero aleatorio en base a la cantidad de personas de la lista
    numeroAleatorio(cantidadLista);
    //elimina el texto de listaAmigos
    añadirAmigoTexto("listaAmigos","");
    //relaciona el numero al azar con la persona de la lista
    relacionSorteoAmigo(numeroGenerado);
    mostrar = (`Tú amigo sorteado es ${amigoSorteado}`);
    console.log(mostrar);
    //muestra el texto final en resultado
    añadirAmigoTexto("resultado",mostrar);
    //se crea una variable intentos para que se inicie el programa cuando apreten 2 veces
    intentos++
    console.log(intentos);
    if(intentos ==2){
        condicionesIniciales();
    }
    return;
};

//funciones secundarias
function limpiarCaja(){
    document.querySelector("#amigo").value =("");
};
function añadirAmigoTexto (ingreso,salida) {
    let visorAmigos = document.getElementById(ingreso);
    visorAmigos.innerHTML = salida;
    return;
};
function numeroAleatorio(numero){
    numeroGenerado = (parseInt(Math.random()*numero));
    console.log(numeroGenerado);
};
function relacionSorteoAmigo(asignacion){
    console.log(listaDeAmigos[asignacion]);
    amigoSorteado = listaDeAmigos[asignacion];
    console.log(amigoSorteado);
};
function condicionesIniciales(){
    listaDeAmigos = [];
    cantidadLista = 0;
    numeroGenerado = 0;
    amigoSorteado = 0;
    mostrar = 0;
    intentos = 0;
    añadirAmigoTexto("listaAmigos","");
    añadirAmigoTexto("resultado","");
    document.getElementById("sorteoAmigoSecreto").setAttribute("disabled", "true");
};