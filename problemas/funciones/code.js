// FUNCIONE
// function saludar(){
//     let respuesta = prompt("hola lucas!!  Como fue tu dia de hoy?");
// if (respuesta == "bien"){
//     alert("me alegro")
// }else{
//     alert("una pena")
// }
// }

// saludar()
// function edad(){
//     let tiempo = prompt("cual es tu edad?");
//         if (tiempo < 18){
//             alert("aun no eres mayor de edad");
//         }
//         else if (tiempo >= 18){
//             alert ("ya eres mayor de edad")
//         }
//     return tiempo;
// }
// let time = edad();

// if (time >= 18){
//     document.write("Tu puedes pasar a mi antro")
// }
// else if (time < 18){
//     document.write(`no puedes pasar a mi antro te faltan ${18 - time} años`)
// }

// PARAMETROS


// function suma (a,b){
//     let sum = a + b;
//     return sum;
// }
// let val = suma(3,3);
// document.write(val)


// FUNCIONES FLECHA
// normal
//  const saludar = function (nombre){
//      let frace = `hola como estas ${nombre}!!! `
//      document.write(frace)
//  }
 
//  saludar("Luis")

//  FLECHA
// const saludar = (nombre) =>{
//     let frace = `hola ${nombre}! <br> Como estas?`
//     document.write(frace)
// }
// saludar("luis")


// PROBLEMAS DE COFLA 1

// let free = false;
// const validarCliente = (time)=>{
//     let edad = prompt("cual es tu edad?");
//     if (edad >= 18){
//         if ((time >= 2 && time < 7) && free == false) {
//             alert("tu puedes pasar gratis");
//             free = true;
//         }else{
//             alert("Puedes pasar pero tienes que pagar")
//         }
//     }else{
//         alert("eres menor de edad no vas a pasar")
//     }
// }
// validarCliente(3)
// validarCliente(11)
// validarCliente(9)
// validarCliente(8)
// validarCliente(2)

