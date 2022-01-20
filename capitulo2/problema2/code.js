
let cantidad = prompt("cuantos alumnos son?")
    let alumnosTotales = [];

    for (i = 0;i < cantidad;i++ ){
        alumnosTotales[i]=[prompt("nombre del alumno " + (i+1)),0];
    }
    const tomarAsistencia = (nombre,p)=>{
        let precencia = prompt(nombre);
        if (precencia == "p" || precencia == "P"){
            alumnosTotales[p][1]++;
        }

    }
    for (i == 0; 1 < 30; i++){
        for (alumno in alumnosTotales)
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
    for (alumno in alumnosTotales){
        let resultado =`${alumnosTotales[alumno][0]}:<br>
             asistencias :${alumnosTotales[alumno][1]}<br>
             ausencias : ${30 - alumnosTotales[alumno][1]}
        `;
        if (30-alumnosTotales[alumno][1]>18){
        resultado += "reprobado por inacistencias"; 
        }else{
            resultado="<br><br>"
        }
    }