
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
    class animal {
    constructor(especie,edad,color){
        this.especie = especie
        this.edad = edad 
        this.color = color    
        this. informacion = `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`  
    }
    verInformacion(){
        document.write(this.informacion + "<br>")
    } 
}

class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color,raza)
    }
}

let perro = new animal("perro","5",'verde')
let gato = new animal("gato","1",'azul')
let leon = new animal("felino","4",'verde')

perro.ladrar()
gato.ladrar()
leon.ladrar()


// document.write(perro.informacion + "<br>")
// document.write(gato.informacion + "<br>")
// document.write(leon.informacion + "<br>")





