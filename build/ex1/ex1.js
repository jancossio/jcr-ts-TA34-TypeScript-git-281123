"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex1 = void 0;
const ex1 = () => { };
exports.ex1 = ex1;
class Persona {
    constructor(nombre = '', edad = 0, dni = '', sexo = sex_default, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    functionsetNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
    setDni(dni) {
        this.dni = dni;
    }
    getDni() {
        return this.dni;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getSexo() {
        return this.sexo;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getPeso() {
        return this.peso;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    getAltura() {
        return this.altura;
    }
}
const sex_default = 'H';
let persona1 = new Persona('Felipe', 22, '12345678O', 'H', 72, 1.79);
let persona2 = new Persona('Fatima', 23, '91856283T', 'M', 74, 177);
let persona3 = new Persona("Fernando", 25, '99118822Y', 'H', 82, 1.81);
console.log(persona1);
console.log(persona2);
console.log(persona3);
