// datos.js
class RepositorioCelulares {
    constructor() {
        this.atenciones = [];
        this.dispositivosRegistrados = [];
    }

    guardarAtencion(datosAtencion) {
        // Método para almacenar la atención del celular en el array
        this.atenciones.push(datosAtencion);
        return "Atención registrada con éxito";
    }

    verificarDispositivoRegistrado(idDispositivo) {
        // Verificar si el dispositivo está registrado
        return this.dispositivosRegistrados.includes(idDispositivo);
    }

    guardarDispositivo(idDispositivo) {
        // Método para registrar un nuevo dispositivo en el sistema
        this.dispositivosRegistrados.push(idDispositivo);
        return "Dispositivo registrado con éxito";
    }

    estimarCostos(estimacionCosto) {
        // Lógica para estimar costos
        // Puedes implementar la lógica específica aquí
        return "Estimación de costos realizada con éxito";
    }

    estimarTiempoReparacion(tiempoEstimado) {
        // Lógica para estimar tiempo de reparación
        // Puedes implementar la lógica específica aquí
        return "Estimación de tiempo de reparación realizada con éxito";
    }

    obtenerAtenciones() {
        // Método para obtener todas las atenciones guardadas
        return this.atenciones;
    }
}
