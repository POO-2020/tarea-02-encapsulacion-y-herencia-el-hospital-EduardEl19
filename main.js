import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import PacienteAsegurado from "./pacienteAsegurado.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main {
    constructor(){
        this._fecha1 = new Fecha (18, 3, 2005)
        this._fecha2 = new Fecha (30, 1, 2018)
        this._fecha3 = new Fecha (12, 7, 1990)
        this._fecha4 = new Fecha (10, 6, 2024)

        this._hora1 = new Tiempo (7, 30, "AM")
        this._hora2 = new Tiempo (6, 40, "PM")

        this._nombre1 = new Nombre ("Marco", "Alvarado", "García")
        this._nombre2 = new Nombre ("Eduardo", "López", "Fletes")
        this._nombre3 = new Nombre ("Juan", "Pérez", "González")

        this._paciente = new Paciente (this._nombre1, this._fecha1, 312-304-2749)

        this._pacienteAsegurado = new PacienteAsegurado (this._nombre3, this._fecha3, 312-495-0464, 548475840, this._fecha4, "Ace Seguros")

        this._doctor = new Doctor (this._nombre2, "Nutriólogo", 312-554-0445, 59040)

        this._cita = new Cita (this._fecha2, this._hora2, this._doctor, this._paciente)

        this._hospital = new Hospital ("Centro de Salud Colima", "Av. San Fernando 1050")
    }
    probarFecha(){
        console.log(this._fecha1.getAños())
        console.log(this._fecha1.getMeses())
        console.log(this._fecha1.getSemanas())
        console.log(this._fecha1.getDias())
        console.log(this._fecha1.getFecha())
        console.log(this._fecha1.getDiaFecha())
    }
    probarTiempo(){
        console.log(this._hora1.getFormato12())
        console.log(this._hora1.getFormato24())
        console.log(this._hora2.getFormato12())
        console.log(this._hora2.getFormato24())
    }
    probarNombre(){
        console.log(this._nombre1.getNombreCompleto())
        console.log(this._nombre1.getApellidoNombre())
        console.log(this._nombre1.getIniciales())
        console.log(this._nombre2.getNombreCompleto())
        console.log(this._nombre2.getApellidoNombre())
        console.log(this._nombre2.getIniciales())
    }
    probarPaciente(){
        console.log(this._paciente.getPerfil())
    }
    probarPacienteAsegurado(){
        console.log(this._pacienteAsegurado.getPerfil())
    }
    probarDoctor(){
        console.log(this._doctor.getPerfil())
    }
    probarCita(){
        console.log(this._cita.getCita())
    }
    probarHospital(){
        console.log(this._hospital.registrarDoctor())
        console.log(this._hospital.buscarDoctor())
        console.log(this._hospital.eliminarDoctor())
        console.log(this._hospital.actualizarDoctor())
        console.log(this._hospital.listarDoctores())
        console.log(this._hospital.registrarCita())
        console.log(this._hospital.buscarCita())
        console.log(this._hospital.eliminarCita())
        console.log(this._hospital.actualizarCita())
        console.log(this._hospital.listarCitas())
    }
}

let app = new Main()

app.probarFecha()
app.probarTiempo()
app.probarNombre()
app.probarPaciente()
app.probarPacienteAsegurado()
app.probarDoctor()
app.probarCita()
app.probarHospital()