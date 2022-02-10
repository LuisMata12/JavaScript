
// function unaFuncion(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     return "hola mundo"
// }

// var mensaje = unaFuncion();
// console.log(mensaje)

// console.log("2 x 0 =", 2 * 0)
// console.log("2 x 2 =", 2 * 2)
// console.log("2 x 3 =", 2 * 3)
// console.log("2 x 4 =", 2 * 4)
// console.log("2 x 5 =", 2 * 5)
// console.log("2 x 6 =", 2 * 6)
// console.log("2 x 7 =", 2 * 7)
// console.log("2 x 8 =", 2 * 8)
// console.log("2 x 9 =", 2 * 9)
// console.log("2 x 10 =", 2 * 10)

// function tablaDelDos(){
//     for(i = 0; i <= 10; i++){
//         console.log("2 x",i, "=", 2*i)
//     }
// }
// tablaDelDos()

// function Suma(num1,num2){
//     var resultado = num1 +num2;
//     alert("el resultado es:"  + resultado)
// }
//  Suma(1,3)
// -------
// function sumatoria(num1,num2){
//     var total = num1 + num2
//     return "la suma es de:" + total;
// }
//  var resultado = sumatoria(1,3);
//  alert(resultado);
// -----this 

// function saludo(nombre,edad){
//     this.nombre = nombre
//     this.edad = edad ; 
//     console.log ("yo soy",nombre, "tengo", edad)
// }
// saludo("jasus", 25)

// ----
// function diaActual(){
//     var fecha = new Date();
//     alert("Hoy es:" + fecha.getDate());
// }
// diaActual();

// var numero = prompt("ingresa un numero");
// var resultado = validacion(numero);
// alert("el numero" + numero + "es: "+resultado)

// function validacion(numero){
//     if(numero % 2 == 0){
//         return "par";
//     } else{
//         return "inpar";
//     }
// }
//  CREAR UNA APLICAION QUE NIS PERMITA 
// sumatoria va dentro del cliclo
// let numDeAlumno, numDeCalificaciones, notas, promedio,alumno;
// numDeAlumno = prompt('cuantos alumnos son');
// numDeCalificaciones = Number(prompt(`cuantas calificaciones va a tener cada alumno`)) 
// let array = [];

// for (i = 0; i< numDeAlumno; i++){
//     array[i][0] = [prompt(`cual es el nombre del alumno ${i + 1}`)]; 
// }

// for (alumno in array){
//     let sumatoria = 0;
//     for(i=0; i < numDeCalificaciones; i++){ 
//         array[alumno][1]=[prompt(`calificacion ${i + 1} de ${array[alumno][0]}`)];   
//     }
// }
// let carro ={
//     color: "rojo",
//     llantas:4,
//     puertas:5,
//     usaGasolina: true
// };
// console.log(carro['usaGasolina', 'llantas'])
let perro ={
    nombre: "canelo",
    color: "cafe",
    edad: 5,
    raza:"doberman",
    ladrar: function(){
        return (`${this.nombre} puede ladrar wua wau`)
    },
    comer: function(){
        console.log(`yomi, yomi`)
    }

}

console.log(perro.ladrar())







