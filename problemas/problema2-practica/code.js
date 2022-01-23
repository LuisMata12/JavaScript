let cantidad = prompt("cuantos alumnos son?")
let array = [];

for(i=0; i < cantidad; i++){
    array[i]=[prompt(`cual es el nombre del alumno` + (i+1)), 0]
}

const asistencia = (nombre,p) =>{
    let presiencia = prompt(nombre);
    if(presiencia == "p" || presiencia == "P"){
        array[p][1]++; 
    }
}
for (i = 0; i < 7; i++){
    for (alumno in array){
        asistencia(array[alumno],alumno)
    }
}
for(alumno in array){
    let resultado = `${array[alumno][0]}: <br> 
    ___________Acistencia:${array[alumno][1]}<br>
    ___________Inasistencias${7 - array[alumno][1]}<br>`;
    if((7-array[alumno][1]) != 0){
        resultado += `Si tienes otra falta mas la semana siguiente seras reprobado <br><br>`
    }else{
        "<br><br>"
    }
    document.write(resultado)
}


