import '/src/assets/css/tarea.css';
import { useState } from "react";

let idContador = 0;

function Tarea() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [tareas, setTareas] = useState([]);

    

    const manejarEnvio = (e) => {
        e.preventDefault();

        const nuevaTarea = {
            id: ++idContador,
            nombre,
            descripcion,
            fecha,
            realizada: false
        };

        setTareas([...tareas, nuevaTarea]);
        console.log("Lista de tareas actualizada:", [...tareas, nuevaTarea]);

        setNombre("");
        setDescripcion("");
        setFecha("");
    };

    const marcarComoRealizada = (id) => {
        const tareasActualizadas = tareas.map(tarea =>
            tarea.id === id ? { ...tarea, realizada: true } : tarea
        );
        setTareas(tareasActualizadas);
    };

    const eliminarTarea = (idAEliminar) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== idAEliminar);
        setTareas(nuevasTareas);
        console.log("Tarea eliminada. Lista de tareas actualizada:", nuevasTareas);
    };

    return (
        <div>
            <div className='Titulo'>
                <h1>Agregar Nueva Tareas</h1>
            </div>

            <div>
                <form onSubmit={manejarEnvio}>
                    <div className='Nombre'>
                        <label>Nombre de la Tarea:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required />
                    </div>

                    <div className='Descrip'>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required />
                    </div>

                    <div className='Limite'>
                        <label>Fecha límite:</label>
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required />
                    </div>

                    <button type="submit">Guardar Tarea</button>
                </form>
            </div>

            <h3>Listado Tarea</h3>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <span style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>
                            {tarea.nombre} - {tarea.descripcion} - {tarea.fecha}
                        </span>
                        <button type="button" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                        <button type="button" onClick={() => marcarComoRealizada(tarea.id)}> Realizada </button> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tarea;