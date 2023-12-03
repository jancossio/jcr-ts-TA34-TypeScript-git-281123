export const ex1 = () => {};
class Persona{
    private nombre : string;
    private edad : number;
    private dni : string;
    private sexo : string;
    private peso : number;
    private altura : number;

    constructor(nombre='', edad=0, dni='', sexo=sex_default, peso=0, altura=0){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    functionsetNombre(nombre:string):void{
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    setEdad(edad:number):void{
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }

    setDni(dni:string):void{
        this.dni = dni;
    }

    getDni():string{
        return this.dni;
    }

    setSexo(sexo:string):void{
        this.sexo = sexo;
    }

    getSexo():string{
        return this.sexo;
    }

    setPeso(peso:number):void{
        this.peso = peso;
    }

    getPeso(){
        return this.peso;
    }

    setAltura(altura:number):void{
        this.altura = altura;
    }

    getAltura(){
        return this.altura;
    }
}

const sex_default= 'H';

let persona1 = new Persona('Felipe', 22, '12345678O', 'H', 72, 1.79);
let persona2 = new Persona('Fatima', 23, '91856283T', 'M', 74, 177);
let persona3 = new Persona("Fernando", 25, '99118822Y', 'H', 82, 1.81);

console.log(persona1);
console.log(persona2);
console.log(persona3);
