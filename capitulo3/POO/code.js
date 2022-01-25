
// class animal{
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy un ${this.specie}, tengo ${this.edad} años, y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     } 
// }
// let perro = new animal ("perro", 5, "marron");
// let pajaro = new animal ("gato", 1, "rojo");
// let leon = new animal ("leon", 4, "azul");
// perro.verinfo();
// pajaro.verInfo();
// leon.verInfo();
let cantidad = prompt("cuantos perros tienes en el refugio");
let perros = [];

for (i = 0; i < cantidad; i++){
    perros[i] = [prompt("cual es el nombre del perro " + (i+1)) , 0, ""];
    perros[i][1] = [prompt(`Cuantos años tiene ${perros[i][0]}`)];
    perros[i][2] =[prompt(`que raza es ${perros[i][0]}?`)]
}
for (animal in perros){
    document.write(`lo que tienes en el inventario es lo siguiente:<br><br>
    Nombre del perro:${perros[animal][0]}<br>
    Años del perro:${perros[animal][1]}<br>
    Raza del perro:${perros[animal][2]} <br>`)
}

let adopcion = prompt('quieres adoptar algun perro?')
if (adopcion == "si" || adopcion == "Si"){
    for (i =0; i < cantidad; i++){
        let eleccion = prompt(`quieres adoptar a ${perros[i][0]}?`);
        if (eleccion == "si" || eleccion == "Si"){
                for (dog in perros){
                    prompt()
                }

            }
        }
    
}


