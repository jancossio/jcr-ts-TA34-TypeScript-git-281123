"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex3 = void 0;
const ex3 = () => { };
exports.ex3 = ex3;
class Electrodomestico {
    constructor(precioBase = 100, color = color_defecto, consumoEnergetico = consumo_defecto, peso = 5) {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        consumo.forEach((value) => {
            if (value === letra) {
                return letra;
            }
        });
        return consumo_defecto;
    }
    comprobarColor(color) {
        colores.forEach((value) => {
            if (value === color) {
                return color;
            }
        });
        return color_defecto;
    }
    precioFinal() {
        let precioAgregado = 0;
        switch (this.consumoEnergetico) {
            case "A":
                precioAgregado += 100;
                break;
            case "B":
                precioAgregado += 80;
                break;
            case "C":
                precioAgregado += 60;
                break;
            case "D":
                precioAgregado += 50;
                break;
            case "E":
                precioAgregado += 30;
                break;
            case "F":
                precioAgregado += 10;
                break;
            default:
                precioAgregado += 0;
        }
        if (this.peso <= 19) {
            precioAgregado += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            precioAgregado += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            precioAgregado += 80;
        }
        else if (this.peso >= 80) {
            precioAgregado += 100;
        }
        return this.precioBase + precioAgregado;
    }
}
const colores = ['Blanco', 'Negro', 'Rojo', 'Azul', 'Gris'];
const consumo = ['A', 'B', 'C', 'D', 'E', 'F'];
const color_defecto = 'Blanco';
const consumo_defecto = "F";
class Lavadora extends Electrodomestico {
    constructor(carga = 5) {
        super();
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        let precioCarga = super.precioFinal();
        if (this.carga > 30) {
            precioCarga += 50;
        }
        return precioCarga;
    }
}
class Television extends Electrodomestico {
    constructor(resolucion = 20, con4K = false) {
        super();
        this.resolucion = resolucion;
        this.con4K = con4K;
    }
    getResolucion() {
        return this.resolucion;
    }
    get4k() {
        return this.con4K;
    }
    precioFinal() {
        let precioResolucion = super.precioFinal();
        if (this.resolucion < 40) {
            precioResolucion = precioResolucion + (precioResolucion * 0.3);
        }
        if (this.con4K) {
            precioResolucion += 50;
        }
        return precioResolucion;
    }
}
class mainApp {
    static run() {
        var electrodomesticos = new Array(10);
        electrodomesticos[0] = new Electrodomestico();
        electrodomesticos[1] = new Electrodomestico();
        electrodomesticos[2] = new Electrodomestico();
        electrodomesticos[3] = new Lavadora();
        electrodomesticos[4] = new Lavadora();
        electrodomesticos[5] = new Lavadora();
        electrodomesticos[6] = new Television();
        electrodomesticos[7] = new Television();
        electrodomesticos[8] = new Television();
        electrodomesticos[9] = new Television();
        var precioTelevisores = 0;
        var precioLavadoras = 0;
        var precioTotalElectro = 0;
        electrodomesticos.forEach((producto) => {
            let precioProd = producto.precioFinal();
            precioTotalElectro += precioProd;
            if (producto instanceof Lavadora) {
                precioLavadoras += precioProd;
                console.log("Lavadora: " + precioProd + "€");
            }
            else if (producto instanceof Television) {
                precioTelevisores += precioProd;
                console.log("Television: " + precioProd + "€");
            }
            else {
                console.log("Electrodomestico: " + precioProd + "€");
            }
        });
        console.log("Precio total lavadoras: " + precioLavadoras + "€");
        console.log("Precio total televisores: " + precioTelevisores + "€");
        console.log("Precio total electrodomesticos: " + precioTotalElectro + "€");
    }
}
mainApp.run();
