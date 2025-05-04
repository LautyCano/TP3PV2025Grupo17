import '/src/assets/css/tarea.css';
import { useState } from "react";



function Tarea() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");

    const [tareas, setTareas] = useState([]);

    let idContador = 0;

    const manejarEnvio = (e) => {
        e.preventDefault();

            //Creacion de la Nueva Tarea
            const nuevaTarea = {
                id: ++idContador,
                nombre,
                descripcion,
                fecha
            };

            //se agrega nueva tarea al Arreglo
            setTareas([...tareas, nuevaTarea]);
            console.log("Lista de tareas actualizada:",[...tareas, nuevaTarea]);

            //limpia el Formulario
            setNombre("");
            setDescripcion("");
            setFecha("");
    };

    return (
        <div>
           
            <div className='Titulo'>
                <h1>Agregar Nueva tareas</h1>
            </div>

            <div>
                <form onSubmit={manejarEnvio}>
                    <div className='Nombre'>
                        <label>Nombre de la Tarea:</label>
                        <input 
                        type="text" id="nombre" name="nombre" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        required/>
                    </div>
                    
                    <div className='Descrip'>
                        <label>Descripción:</label>
                        <input 
                        type="text" id="descripcion" name="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required/>
                    </div>
                    
                    <div className='Limite'>
                        <label >Fecha límite:</label>
                        <input 
                        type="date" id="fecha" name="fecha" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required/>
                    </div>

                    <button type="submit">Guardar Tarea</button>
                </form>
            </div>
                <h3>Listado Tarea</h3>
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id}>
                            <span>{tarea.nombre}</span> - <span>{tarea.descripcion}</span> - <span>{tarea.fecha}</span>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default Tarea