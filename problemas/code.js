var sueldo = 2000; 
var array = []

const sistemaDeChecado =() =>{
    let entrada = prompt("se cumplio con la hora de entrada todos los dias?");
    if (entrada == "no"){
        alert("perrdiste tu bono de puntualidad")
        sueldo = sueldo - 300
        let dias = prompt ("dias laborados?")
        if(dias != 15){
        alert('se descontaran 300 de tu bono de asistencia');
        sueldo = sueldo - 300;
        sueldo = 93.3333 * dias 
        document.write(`Tu sueldo es de $${sueldo} <br> Dias laborados ${dias} = ${dias * 93.333} <br> Bono de asisitencia = 0 <br> bono de puntualidad = 0`)
        }else{
            if (dias==15){
                alert("tines el bono de asistencia")
                document.write(`Tu sueldo es de ${sueldo}<br> dias laborados ${dias} = ${dias * 93.333} <br> bono de puntual = 0 <br> boono de asistencia es de 300`)

            }
        }
    }
    else if (entrada == "si"){
        alert("felicidades tienes tu bono de asistencia")
        dias = prompt ("dias laborados?")
        if (dias == 15){
            alert("tienes tu bono de asistencia");
            document.write(`Tu sueldo es de ${sueldo} <br> Dias laborados ${dias} = ${dias * 93.333} <br> Bono de asisistencia = 300 <br> Bono de puntualidad = 300` )
        }else{
            alert(`perdiste tu bono de asistencia `)
            sueldo =  (dias * 93.333)
            document.write(`Tu sueldo es de ${sueldo}<br>Dias laborados ${dias} = $${dias * 93.333} <br> bono de putualidad = 0 <br> bono de asistecia = 300 `)
        }
    }

    
}
sistemaDeChecado();