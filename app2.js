//b) Crear 2 variables con valores numéricos libres:

var cantidadDeGatos = 5;
var cantidadDePasos = 2;
var pasos = "🐾";

for (let i = 1; i <= cantidadDeGatos; i = i + 1) {
    var pasosDegatos = "";
    for (var j = 1; j <= cantidadDePasos; j = j + 1) {
        pasosDegatos += pasos;
    }
    console.log(`Gato # ${i}: 🐈  ${pasosDegatos}`);
}
