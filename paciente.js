import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono){
        this._nombre = nombre
        this._fecha = fechaNacimiento
        this._numero = telefono
        console.log("El objeto ha sido inicializado")
    }
    getPerfil(){
        return `${this._nombre.getNombreCompleto()}, ${this._fecha.getFecha()}, ${this._numero}`
    }
}