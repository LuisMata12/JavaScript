const sumar = (num1, num2) =>{
    return parseInt(num1)+parseInt(num2);
}
const restar = (num1, num2) =>{
    return parseInt(num1)-parseInt(num2);
}
const multiplicar = (num1, num2) =>{
    return parseInt(num1)*parseInt(num2);
}

const dividir = (num1, num2) =>{
    return parseInt(num1)/parseInt(num2);
}
let operation = prompt("que operacion quieres hacer");
if(operation == "suma"){
    let num1 = prompt("numero uno que quiere sumar");
    let num2 = prompt("numero dos que quieres sumar");   
    let resultado = sumar(num1,num2);
    alert(resultado)
}
if(operation == "restar"){
    let num1 = prompt("numero uno que quiere restar");
    let num2 = prompt("numero dos que quieres restar");   
    let resultado = restar(num1,num2);
    alert(resultado)
}
if(operation == "dividir"){
    let num1 = prompt("numero uno que quiere dividir");
    let num2 = prompt("numero dos que quieres dividir");   
    let resultado = dividir(num1,num2);
    alert(resultado)
}
if(operation == "multiplicar"){
    let num1 = prompt("numero uno que quiere multiplicar");
    let num2 = prompt("numero dos que quieres multiplicar");   
    let resultado = multiplicar(num1,num2);
    alert(resultado)
}
