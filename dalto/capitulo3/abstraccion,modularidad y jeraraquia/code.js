// ABSTRACCION: intentar reducir a sus compenentes basicos(resumir)
// modularidad: Intentar dividir el problema por pedazos.
// Encapsulamiento: Consiste que el usuario no pueda acceder tan facil a los datos.
// Polimorfismo: Consiste en veer como un objeto se comporta ante el mismo metodo.
// herencia: Herada las clase de la clase y agrega unas nuevas por medio de la palabra "extedns"
// metodos estaticos: no depende de algun objeto de la clase
// Metodos getters y setters (set,get)

class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verinfo(){
        document.write(this.informacion + "<br>")
    }  
};
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza =  raza
    }
    ladrar(){
        alert("WAW!")
    }
}

let perro = new Perro("perro", "5", "rojo");
let gato = new Animal("felino", "6", "cafe");
let dragaon = new Animal("dragaon", "3000", "rojo");
perro.ladrar();
