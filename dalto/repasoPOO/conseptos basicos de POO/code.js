class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verinfo(){
        document.write(this.informacion + "<br>")
    }   
}

let perro = new animal("perro", "5", "rojo");
let gato = new animal("felino", "6", "cafe");
let dragaon = new animal("dragaon", "3000", "rojo");
perro.verinfo();
gato.verinfo();
dragaon.verinfo(); 
// document.write(perro.informacion + "<br>" + gato.informacion +"<br>"+dragaon.informacion)