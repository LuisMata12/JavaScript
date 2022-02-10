

let seleccion = prompt("Cual es la unidad de grados que quieres transformar");
let tipoDeGrados =Number(prompt(`cuantos grados ${seleccion} quieres convertir?`));
let continuar;
function fahrenheit(tipoDeGrados){
    let celcius = (tipoDeGrados - 32) * .555555559;
    let kalvin = .555555559 * (tipoDeGrados - 32) + 273.15;
    return `Grados fahrenheit = ${tipoDeGrados}°<br>
    Grados Celsius = ${celcius}<br>
    Grados Kalvin = ${kalvin}`;
};
function kalvin(tipoDeGrados){
    let fahrenheit = 1.8 * (tipoDeGrados - 273.15) + 32;
    let celcius = tipoDeGrados - 273.15;
    return `Grados Kalvin = ${tipoDeGrados}<br>
    Grados fahrenheit =${fahrenheit}<br>
    Grados celcius = ${celcius}`;
};
function celcius(tipoDeGrados){
    let fahrenheit = tipoDeGrados * 1.8 + 32;
    let kalvin = tipoDeGrados + 273.15;
    return `Grados Celcius = ${tipoDeGrados}<br>
    Grados Fahrenheit = ${fahrenheit}<br>
    Grados kalvin = ${kalvin}`;
};
if(seleccion == "fahrenheit" || seleccion == "Fahrenheit"){
    let resultado = fahrenheit(tipoDeGrados);
    document.write(resultado);
};
if(seleccion == "kalvin" || seleccion == "Kalvin"){
    let resultado = kalvin(tipoDeGrados);
    document.write(resultado);
};
if(seleccion == "celcius" || seleccion == "Celcius"){
    let resultado = celcius(tipoDeGrados);
    document.write(resultado);
};







