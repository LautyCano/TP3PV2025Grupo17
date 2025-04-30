import '/src/assets/css/tarea.css';

function Tarea() {
    return (
        <>
            <div className='Titulo'>
            <h1>Listado de tareas</h1>
        </div>

        <div>
            <form>
                <label htmlFor="nombre">Nombre de la Tarea:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="descripcion">Descripción:</label>
                <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

                <label htmlFor="fecha">Fecha límite:</label>
                <input type="date" id="fecha" name="fecha" required />

                <button type="submit">Guardar Tarea</button>
            </form>
        </div>
        </>
    );
}

export default Tarea