let array = [];

function aniadirElemento() {

    let elemento = document.getElementById("elemento").value;
    let posicion = document.getElementById("posicion").value;

    if (posicion === "") {
        array.push(elemento);
        alert("Has introducido el elemento en el array");
    } else if (isNaN(posicion)) {
        alert("Has de introducir un número");
    } else {
        posicion = parseInt(posicion);
        if (array[posicion]) {
            alert("Esta posición ya tiene un valor, por lo que has de introducir otra posición")
        } else {
            array[posicion] = elemento;  //Con esto meto el elemento en la posición que el usuario ha indicado
            alert("Has introducido el elemento en el array");
        }

    }
}

function editarElemento() {

    let elemento = document.getElementById("elemento").value;
    let posicion = document.getElementById("posicion").value;


    if (posicion === "") {
        alert("La posición está vacía, has de indicar una posición");
    } else if (isNaN(posicion)) {
        alert("Has de introducir un número");
    } else {
        posicion = parseInt(posicion);
        array[posicion] = elemento;  //Con esto edito el elemento de la posición que el usuario ha indicado
        alert("Has editado el elemento del array");
    }

}

function borrarElemento() {

    let elemento = document.getElementById("elemento").value;
    let posicion = document.getElementById("posicion").value;


    if (posicion === "") {
        alert("La posición está vacía, has de indicar una posición");
    } else if (isNaN(posicion)) {
        alert("Has de introducir un número");
    } else {
        posicion = parseInt(posicion);
        array = array.splice(posicion, 1); //Con esto le digo la posición en la que borro un elemento y cuántos elementos borro
        alert("Has borrado el elemento o los elementos seleccionados");
    }

}

function buscarElemento() {

    let posicion = document.getElementById("posicion").value;


    if (posicion === "") {
        alert("La posición está vacía, has de indicar una posición");
    } else if (isNaN(posicion)) {
        alert("Has de introducir un número");
    } else {
        posicion = parseInt(posicion);
        if (array[posicion]) {
            alert("El elemento existente en el array en la posición indicada es " + array[posicion]);
        } else {
            alert ("En la posición indicada no hay guardado ningún elemento"); 
        }

    }

}

function buscarIndice() {

    let elemento = document.getElementById("elemento").value;


    if (elemento === "") {
        alert("El elemento está vacío, has de indicar un elemento");
    } else {
        let encontrado = array.findIndex(e => e === elemento); /*findIndex() es un método que me devuelve el valor que coincide o -1 si no
        coincide ninguno. e es el valor de los elementos, con lanmda le digo que recorra y le pongo la condición de que devuelva cuando
        e==)elemento. */
        alert("El primer índice encontrado para el elemento " + elemento + "ha sido " + encontrado + " .");
    }

}

function mostrarArray() {
    console.log(array);

}