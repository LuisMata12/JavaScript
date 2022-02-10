let fechaNac, edad, fechaActual;

// function capturaNombre(){
//     txtNombre = document.getElementById('nombre');
//      alert('tu no nombre es ' + txtNombre.value);
// };
function calcularEdad(){
    let fecha = new Date(); 
    fechaNac= Number(document.getElementById('fecha').value,slice(0,4));
    fechaActual = fecha.getFullYear();
    if (fechaNac < fechaActual){
        alert('elige año de nacio=miento valido')
    }else{
        edad=fechaActual-fechaNac;
        alert('tu edad es ' + edad);
    }
};

document.getElementById('calular').addEventListener('click',calcularEdad);
