var global
export default class Fecha {
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año){
        this._fecha = new Date (año, mes - 1, dia)
        this._diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] 
        this._meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        console.log("El objeto ha sido inicializado")
    }
    getAños(){
        let años 
        let añoActual = new Date(Date.now())
        años = añoActual.getFullYear() - this._fecha.getFullYear()
        global = años
        return `${años}`
    }
    getMeses(){
        let meses 
        meses = this.getAños() * 12
        global = meses
        return `${meses}`
    }
    getSemanas(){
        let semanas 
        semanas = this.getMeses() * 4
        global = semanas
        return `${semanas}`
    }
    getDias(){
        let dias 
        dias = this.getSemanas() * 7
        global = dias
        return `${dias}`
    }
    getFecha(){
        let mesAño
        mesAño = this._meses[this._fecha.getMonth()]
        return `${this._fecha.getDate()}/${mesAño}/${this._fecha.getFullYear()}`
    }
    getDiaFecha(){
        let diaSemana 
        diaSemana = this._diasSemana[this._fecha.getDay()]
        return `${diaSemana}`
    }
}