let free = false;

const validarCliente = (time)=>{
    edad = prompt("Cual es tu edad?");
    if (edad > 18){
        if((time >= 2 && time < 7) && free == false){
            alert("puedes pasar gratis");
            free = true;
        }else{
            alert(`Son las ${time}:00hr puedes pasar, pero tienes que pagar la entrada`)
        }

    }else{
        alert("Eres menor de edad, no vas a pasar");
    }
} 
validarCliente(23)
validarCliente(17)
validarCliente(1)
validarCliente(2)
validarCliente(0.2)
