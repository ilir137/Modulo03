const formatoTitulo = "font-size:24px; background-color: green; font-weight: bold;";
var grupo = {
    nombre: "The Beatles",
    añoFundacion: "1960",
    activo: true,
    genero: "🎵 Pop Rock"
}

function llamarConsola(){
    console.log("%c" + grupo.nombre, formatoTitulo);
    console.log("Año de fundación: " + grupo.añoFundacion);
    console.log("Activo: " + grupo.activo);
    console.log("Género: " + grupo.genero);
}

llamarConsola()

grupo = {
    nombre: "Queen",
    añoFundacion: "1970",
    activo: false,
    genero: "🎸 Rock"
}

llamarConsola()

grupo = {
    nombre: "AC DC",
    añoFundacion: "1973",
    activo: true,
    genero: "🤘 Hard Rock"
}

llamarConsola()

grupo = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: "1770",
    activo: false,
    genero: "🎼 Clásica"
}

llamarConsola()

grupo = {
    nombre: "The Rolling Stones",
    añoFundacion: "1962",
    activo: true,
    genero: "🎸 Rock"
}

llamarConsola()