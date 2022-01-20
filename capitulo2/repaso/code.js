
// let valor = false;

// const validarCliente = (time) =>{
//     let edad = prompt("Que edad tienes?")
//     if (edad >= 18){
//         if ((time >= 2 && time <= 7) && valor == false){
//             alert("tu puedes pasar gratis");
//             valor = true;
//         }else{
//             alert(`tu puedes pasar pero tienes que pagar`)
//         }

//     }else{
//         alert(`no puedes pasar por que tienes la edad de ${edad}`)
//     }
// }

// validarCliente(23)
// validarCliente(7)
// validarCliente(3)
// validarCliente(3)
// validarCliente(3)
// validarCliente(11)

// BUCLE FOR (Bucle definido)

// for (i = 20; i > 0; i --){
//     document.write(i + "<br>");
// }
for (i = 20; i > 0; i--){
    if (i % 2 !== 0){
        continue;
    }else{
        document.write(i + "<br>")
    }

}


