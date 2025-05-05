import '../css/producto.css';
import { useState } from 'react';

function Producto() {
    const [productos] = useState([
        { descripcion: "Teclado", precio: 30000 },
        { descripcion: "Mouse", precio: 15000 },
        { descripcion: "Monitor", precio: 85000 },
        { descripcion: "Auriculares", precio: 49000 },
        { descripcion: "Webcam", precio: 22000 },
        { descripcion: "caramelos", precio: 10 }
    ]);

    productos.forEach(p => {
        console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
    });

    const productosFiltrados = productos.filter(p => p.precio > 20);
    console.log("Productos con precio mayor a $20:", productosFiltrados);

    return (
        <div className="contenedor">
            <h1>Listado de Productos</h1>

            <ul className="lista">
                {productos.map((p, i) => (
                    <li key={i}>
                        {p.descripcion} - ${p.precio.toLocaleString()}
                    </li>
                ))}
            </ul>

            <h2>Productos filtrados (mayor a $20)</h2>
            <ul className="lista">
                {productosFiltrados.map((p, i) => (
                    <li key={i}>
                        {p.descripcion} - ${p.precio.toLocaleString()}
                    </li>
                ))}
            </ul>

            <p>Los productos también se muestran en consola.</p>
        </div>
    );
}

export default Producto;
