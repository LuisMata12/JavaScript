// .length dtermina el numero de caracteres que tiene una cadena.

// CONCAT!!! CONCADENA 

// let cadena = "cadena de prueba ";
// let cadena2 = "cadena 2."
// let resultado = cadena.concat(cadena2);
// document.write(resultado);

// STAR WITH!!! VERIFICA QUE LA CADENA INICIE CON LO MISMO DE LA SEGUNDA CADENA
// END WITH!!! VERIFICA QUE LA CADENA TERMINE CON LO MISMO DE LA SEGUNDA CADENA
// let cadena = "cadena de prueba ";
// let cadena2 = "cadena "
// let resultado = cadena.startsWith(cadena2);
// document.write(resultado)

// INCLUDES!!! PERMITE VER SI HAY UNA CADENA DENTRO DE OTRA CADENA
// let cadena = "cadena de prueba ";
// let cadena2 = "cadena "
// let resultado = cadena.includes(cadena2);
// document.write(resultado);

// INDEX OF!!! Permite saber en que lugar empieza la ingresada (si devuelve -1 no encuentra la palabra)
// let cadena = "cadena de prueba tonto ";
// let cadena2 = "tonto"
// let resultado = cadena.indexOf(cadena2);
// document.write(resultado);

// LAST INDEX OF!!! si se repite te dice en que lugar empieza la ultima palabra que quieres que busque 
// let cadena = "cadena de prueba tonto ";
// let cadena2 = "tonto"
// let resultado = cadena.lastIndexOf(cadena2);
// document.write(resultado);

//PAD START [PROPUESTA DE ESTANDAR] Rellena la cadena al principio con el numerode caracteres que especifiques
// let cadena = "abc";
// let cadena2 = ""
// let resultado = cadena.padStart(10,"12");
// document.write(resultado);

//PAD END [PROPUESTA DE ESTANDAR] Rellena la cadena al final con el numerode caracteres que especifiques
// let cadena = "abc";
// let cadena2 = ""
// let resultado = cadena.padEnd(10,"12");
// document.write(resultado);

//REPEAT [PROPUESTA DE ESTANDAR] Rellena la cadena repitiendon la cadena el numero de veces nececaria hasta llenar el numero de caracteres que especificaste
// let cadena = "abc ";
// let cadena2 = ""
// let resultado = cadena.repeat(3);
// document.write(resultado);

// SPLIT!!! Divide la cadena haciendolo un arreglo con el parametro que indiquemos
//  let cadena = "Hola, como estas ";
//  let resultado = cadena.split(",");
//  console.log(resultado);

// SUB STRING!! Crea un nuevo string de la cadena que ya tienes (tu indecas de donde a donde quieres que tome de la cadena anterior para poder crear el nuevo string.Con el numero con el que termina no esta incluido)
//  let cadena = "Hola, como estas ";
//  let resultado = cadena.substring(0,3);
//  document.write(resultado);

// TOLOWER CASE!! Transforma la cadena en letras minusculas
// toUpperCase!!! Tansforma la cadena a mayusculas
//  let cadena = "Hola, como estas ";
//  let resultado = cadena.toLowerCase(0,3);
//  document.write(resultado);

//  let cadena = "Hola, como estas ";
//  let resultado = cadena.toLowerCase(0,3);
//  document.write(resultado);
 
// TO STRING!! Transforma en un String el dato optenido(TAMBIRN PUEDE HACER ARREGLOS STRINGS)
// let cadena = 2556;
// let resultado = cadena.toString();
// document.write(2 + cadena)

// TRIM ELIMINA LOS ESPACIOS DE LA CADENA INGRESADOS
let cadena = "   hola como estas      ";
let resultado = cadena.trim();
document.write(cadena.length + "<br>");
document.write(resultado.length);


