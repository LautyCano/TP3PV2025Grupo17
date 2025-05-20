import '../css/producto.css';
import React from 'react';

let idContador = 0;
const productos = [];

function Producto() {
    const manejarFormulario = (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById("produc").value;
        const precio = parseFloat(document.getElementById("precio").value);

        const nuevoProducto = {
            
            id: ++idContador,
            nombre,
            precio,
        };

        productos.push(nuevoProducto);

        productos.forEach(producto => {
            console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
        });

        const productosCaros = productos.filter(producto => producto.precio > 20);
        console.log("Productos con precio mayor a $20:", productosCaros);

        const lista = document.getElementById('lista-productos');
        if (lista) {
            const item = document.createElement('li');
            item.textContent = `Producto: ${nuevoProducto.nombre} - ${nuevoProducto.precio}`;
            lista.appendChild(item);

            const itemExtra = document.createElement('li');
            itemExtra.textContent = `Producto: Parlante Bluetooth - 59000.9`;
            lista.appendChild(itemExtra);
        }
    };

    return (
        <>
            <div className="Titulo">
                <h1>Agregar Productos</h1>
            </div>

            <div>
                <form onSubmit={manejarFormulario}>
                    <label>Producto:</label>
                    <input type="text" id="produc" name="produc" />

                    <label>Precio:</label>
                    <input type="number" id="precio" name="precio" />

                    <button type="submit">Registrar Producto</button>
                </form>
            </div>

            <h3>Listado de Productos</h3>
            <ul id="lista-productos">
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.precio}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Producto;
