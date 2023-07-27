//Realizar un programa en Javascript que cumpla con los siguientes puntos:
//a) Crear una variable con un valor numérico libre:

console.log("----Ejercicio n° 1----")
var cantidadDeGatos = 10;
var contador = 0;

while (contador < cantidadDeGatos) {

    if (cantidadDeGatos == 1) {
        contador++
        console.log(`Gato # ${contador}: 😺`)
    } else if (cantidadDeGatos == 2) {
        contador++
        console.log(`Gato # ${contador}: 😺`)
        contador++
        console.log(`Gato # ${contador}: 😸`)
    } else if (cantidadDeGatos == 3) {
        contador++
        console.log(`Gato # ${contador}: 😺`)
        contador++
        console.log(`Gato # ${contador}: 😸`)
        contador++
        console.log(`Gato # ${contador}: 😹`)
    } else {
        contador++
        console.log(`Gato # ${contador}: 😺`)
        contador++
        console.log(`Gato # ${contador}: 😸`)
        contador++
        console.log(`Gato # ${contador}: 😹`)
    }
}


