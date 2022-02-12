(function(){
    var saludo = function(){
        console.log("focus!");
    };
    var input = document.getElementById("boton");
    input.addEventListener("focus",saludo);
});












