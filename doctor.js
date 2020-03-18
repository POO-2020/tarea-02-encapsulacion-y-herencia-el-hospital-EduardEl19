import Nombre from "./nombre.js"
export default class Doctor {
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} especialidad 
     * @param {number} telefono 
     * @param {number} cedula 
     */
    constructor(nombre, especialidad, telefono, cedula){
        this._nombre = nombre
        this._especialidad = especialidad
        this._numero = telefono
        this._cedula = cedula
        console.log("El objeto ha sido inicializado")
    }
    getPerfil(){
        return `Mi nombre es ${this._nombre.getNombreCompleto()}, soy ${this._especialidad}, mi numero de contacto es ${this._numero} y mi cedula es ${this._cedula}`
    }
    getApellidoPaterno(){
        return this._nombre._apellidoPaterno()
    }
    getCedula(){
        return this._cedula
    }
    encontrarDoctor(doctor){
        if(doctor.getCedula() === this._cedula){
            return true
        }
        return false
    }
}