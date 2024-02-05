// negocio.js
class GestorAtencionCelulares {
    constructor() {
        this.repositorio = new RepositorioCelulares();
    }

    registrarDispositivo(idDispositivo) {
        // Regla: Todos los dispositivos deben ser registrados en el sistema antes de ser atendidos.
        // Justificación: Facilita el seguimiento de la historia del dispositivo y proporciona información esencial para el servicio técnico.
        return this.repositorio.guardarDispositivo(idDispositivo);
    }

    registrarAtencion(datosAtencion) {
        // Validaciones y lógica de negocio
        const dispositivoRegistrado = this.repositorio.verificarDispositivoRegistrado(datosAtencion.idDispositivo);

        if (dispositivoRegistrado) {
            // Regla: Proporcionar una estimación de costos antes de realizar cualquier reparación.
            // Justificación: Permite a los clientes tomar decisiones informadas sobre si proceder o no con la reparación.
            const estimacionCosto = this.repositorio.estimarCostos(datosAtencion.estimacionCosto);

            // Regla: Proporcionar un tiempo estimado de reparación realista y cumplir con él.
            // Justificación: Mejora la satisfacción del cliente al gestionar sus expectativas de manera precisa.
            const tiempoEstimado = this.repositorio.estimarTiempoReparacion(datosAtencion.tiempoEstimado);

            // Registrar atención
            const resultado = this.repositorio.guardarAtencion(datosAtencion);

            // Mostrar mensaje de confirmación
            alert(`${resultado}\n${estimacionCosto}\n${tiempoEstimado}`);
            
            // Actualizar la visualización de atenciones después de registrar
            this.visualizarAtenciones();
        } else {
            alert("Error: El dispositivo no está registrado en el sistema. Regístralo antes de la atención.");
        }
    }

    visualizarAtenciones() {
        // Obtener todas las atenciones guardadas
        const atenciones = this.repositorio.obtenerAtenciones();

        // Mostrar las atenciones en el elemento con el ID "resultado"
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<h2>Atenciones Registradas:</h2>";

        if (atenciones.length === 0) {
            resultadoDiv.innerHTML += "<p>No hay atenciones registradas.</p>";
        } else {
            atenciones.forEach(atencion => {
                resultadoDiv.innerHTML += `<p>${atencion.idDispositivo}: ${atencion.descripcion}, Costo estimado: $${atencion.estimacionCosto}, Tiempo estimado: ${atencion.tiempoEstimado} días</p>`;
            });
        }
    }
}
