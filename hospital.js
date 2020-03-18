import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Cita from "./cita.js"

export default class Hospital {
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion 
     */
    constructor(nombre, direccion){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array()
        this._citas = new Array()
        console.log("El objeto ha sido inicializado")
    }
    registrarDoctor(doctor){
        this._doctores.push(doctor)
    }
    buscarDoctor(doctor){
        let result = this._doctores.find(d => d.encontrarDoctor(doctor))
        return result
    }
    eliminarDoctor(doctor){
        let indice = this._encontrarIndice(doctor)
        if (indice < 0){
            return false
        }
        this._doctores.splice(indice, 1)
        return true
    }
    actualizarDoctor(doctor, doctorNuevo){
        let result = this._encontrarDoctor(doctor)
        if(result < 0){
            return false
        }
        this._doctores.splice(result, 1, doctorNuevo)
        return true
    }
    listarDoctores(){
        this._doctores.forEach((doctor, i) => {
            console.log(`No. ${i + 1} - ${doctor.getPerfil()}`)
        })
    }
    registrarCita(cita){
        this._citas.push(cita)
    }
    buscarCita(cita){
        let result = this._citas.find(c => c.encontrarCita(cita))
        return result
    }
    eliminarCita(cita){
        let indice = this._encontrarIndice(cita)
        if (indice < 0){
            return false 
        }
        this._citas.splice(indice, 1)
        return true
    }
    actualizarCita(cita, citaNueva){
        let result = this._encontrarCita(cita)
        if(result < 0){
            return false
        }
        this._citas.splice(result, 1, citaNueva)
        return true
    }
    listarCitas(){
        this._citas.forEach((cita, i) => {
            console.log(`${i + 1} ${cita.getCita()}`)
        })
    }
}