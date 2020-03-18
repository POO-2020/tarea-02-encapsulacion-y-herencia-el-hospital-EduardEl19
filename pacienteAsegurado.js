import Paciente from "./paciente.js"
import Fecha from "./fecha.js"

export default class PacienteAsegurado extends Paciente {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     * @param {number} numPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor(nombre, fechaNacimiento, telefono, numPoliza, fechaFinVigencia, compañia){
        super({nombre, fechaNacimiento, telefono})
        this._poliza = numPoliza
        this._fechaFinVigencia = fechaFinVigencia
        this._compañia = compañia
    }
    getPerfil(){
        return `Paciente asegurado: ${this._nombre.getNombreCompleto()}, con fecha de nacimiento en ${this._fecha.getFecha()}, numero de telefono ${this._numero}, poliza ${this._poliza} con vigencia hasta ${this._fechaFinVigencia.getFecha()}, con la compañia ${this._compañia}`
    }
}