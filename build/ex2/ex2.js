"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex2 = void 0;
const ex2 = () => { };
exports.ex2 = ex2;
class Password {
    constructor(longitud = 8) {
        this.longitud = longitud;
        this.contrasenia = this.generarContrasenia();
    }
    generarContrasenia() {
        const chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
        let retPass = '';
        for (let i = 0; i < this.longitud; i++) {
            let tmp = chars.charAt(Math.random() * chars.length);
            retPass += tmp;
        }
        return retPass;
    }
    getContrasenia() {
        return this.contrasenia;
    }
    getLongitud() {
        return this.longitud;
    }
}
;
const contrasenia1 = new Password();
const contrasenia2 = new Password(11);
const contrasenia3 = new Password(7);
console.log(contrasenia1);
console.log(contrasenia2);
console.log(contrasenia3);
