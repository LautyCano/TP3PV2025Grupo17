import '../css/producto.css';
import React, { useState, useMemo } from 'react';

function Producto() {
    const [busquedaPor, setBusquedaPor] = useState('id');
    const [buscar, setBuscar] = useState('');
    const [listaProductos, setListaProductos] = useState([]);
    const [idActual, setIdActual] = useState(1);

    function agregarProducto(e) {
        e.preventDefault();

        const nombreProd = document.getElementById("produc").value;
        const precioProd = parseFloat(document.getElementById("precio").value);

        const nuevo = {
            id: idActual,
            nombre: nombreProd,
            precio: precioProd,
        };

        setListaProductos([...listaProductos, nuevo]);
        setIdActual(idActual + 1);

        document.getElementById("produc").value = '';
        document.getElementById("precio").value = '';
    }

    const filtrados = useMemo(() => {
        if (buscar.trim() === '') return listaProductos;

        return listaProductos.filter((prod) => {
            if (busquedaPor === 'id') {
                return prod.id.toString() === buscar.trim();
            } else if (busquedaPor === 'nombre') {
                return prod.nombre.toLowerCase().includes(buscar.toLowerCase());
            }
            return true;
        });
    }, [listaProductos, buscar, busquedaPor]);

    function resetearBusqueda() {
        setBuscar('');
        setBusquedaPor('id');
    }

    return (
        <div className="contenedor">
            <h1>Mis Productos</h1>

            <form onSubmit={agregarProducto}>
                <label>Producto:</label>
                <input type="text" id="produc" required />

                <label>Precio:</label>
                <input type="number" id="precio" required />

                <button type="submit">Agregar</button>
            </form>

            <div className="busqueda">
                <label>
                    <input
                        type="radio"
                        name="tipo"
                        value="id"
                        checked={busquedaPor === 'id'}
                        onChange={() => setBusquedaPor('id')}
                    />
                    ID
                </label>
                <label>
                    <input
                        type="radio"
                        name="tipo"
                        value="nombre"
                        checked={busquedaPor === 'nombre'}
                        onChange={() => setBusquedaPor('nombre')}
                    />
                    Nombre
                </label>

                <input
                    type="text"
                    placeholder="Buscar algo..."
                    value={buscar}
                    onChange={(e) => setBuscar(e.target.value)}
                />
                <button type="button" onClick={resetearBusqueda}>Limpiar</button>
            </div>

            <h3>Productos Agregados</h3>
            <ul className="lista">
                {filtrados.map((p) => (
                    <li key={p.id}>
                        <b>#{p.id}</b> - {p.nombre} - ${p.precio.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Producto;
