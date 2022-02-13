class celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false
    }
    precionarElBotonDeEncendido(){
        if(this.encendido == false){
            alert("Telefono prendido")
            this.encendido = true;
        }else{
            alert("Telefono apagado");
            this.encendido = false
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("nose puede reiniciar el celular por que esta apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada con una rasolucion de ${this.rdc}`)
    }
    grabarVideo(){
        alert(`grabando video en resolucion de ${this.rdc}`)
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de camara: <b>${this.rdc}</b><br>
        resolucion de pantalla: <b>${this.rdp}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        `;
    }
}

const celular1 = new celulares("rojo", "150gr","5'","HD","1GB" );
const celular2 = new celulares("engro", "155gr","4.6'","full HD","2GB" );
const celular3 = new celulares("blanco", "154gr","5.7'","full HD","2GB" );
celular1.precionarElBotonDeEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.precionarElBotonDeEncendido();
document.write(`${celular1.mostrarInfo()} <br> 
                ${celular2.mostrarInfo() } <br>
                ${celular3.mostrarInfo()} <br> `);

class celularAltaGama {
    constructor(color, peso, rdp, rdc, ram, rdce){
        super(color, peso, rdp, rdc,ram,);
        this.rdce = rdce
    }
    grabarVideoLento(){
        alert("estas grabanndo en camara lenta");
    }
    reconocimientoFcacial(){
        alert("vamos a niniciar un reconocimientos facial")
    }
}
