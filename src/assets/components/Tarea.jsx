import '/src/assets/css/tarea.css';
import { useState } from "react";



function Tarea() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [tareas, setTareas] = useState([]);

    const manejarEnvio = (e) => {

        if (nombre && descripcion && fecha) {
        const nuevaTarea = {
            nombre,
            descripcion,
            fecha
        };

        setTareas([...tareas, nuevaTarea]);
        console.log("Lista de tareas actualizada:",[...tareas, nuevaTarea]);

        setNombre("");
        setDescripcion("");
        setFecha("");
        } 
        else {
            alert("Por favor, completa todos los campos.");
        }
    };
        return (
            <>
                <div className='Titulo'>
                    <h1>Listado de tareas</h1>
                </div>

                <div>
                    <form>
                        <label htmlFor="nombre">Nombre de la Tarea:</label>
                        <input type="text" id="nombre" name="nombre" required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />

                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" rows="4" required
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}></textarea>

                        <label htmlFor="fecha">Fecha límite:</label>
                        <input type="date" id="fecha" name="fecha" required
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}/>

                        <button type="button" onClick={manejarEnvio}>Guardar Tarea</button>
                    </form>
                </div>
            </>
        );

}
export default Tarea