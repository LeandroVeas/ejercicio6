console.log("----Ejercicio n° 3----")
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var pasos = "🐾";

for (let i = 1; i <= cantidadDeGatos; i = i + 1) {
    var pasosDegatos = "";

    for (var j = 1; j <= cantidadDePasos; j = j + 1) {
        pasosDegatos += pasos;
    }

    if (i % 2 == 0) {
        console.log(`Gato # ${i}: 🐈 ⬛  ${pasosDegatos}`);
    } else {
        console.log(`Gato # ${i}: 🐈  ${pasosDegatos}`);
    }

}

console.log("----Gracias por su visita----")
