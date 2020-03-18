import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"

export default class Cita {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Doctor} doctor 
     * @param {Paciente} paciente 
     */
    constructor(fecha, hora, doctor, paciente){
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
        console.log("El objeto ha sido inicializado")
    }
    getCita(){
        return `Nueva cita establecida en: ${this._fecha.getFecha()}, a la hora marcada ${this._hora.getFormato24()}, el Dr. ${this._doctor._nombre._apellidoPaterno} y el paciente citado ${this._paciente._nombre.getNombreCompleto()}.`
    }
}