import { useState } from "react";
import '../css/producto.css';

function Producto() {

    const [productos, setProductos] = useState(() => {
        return [
            {
            id: 1,
            nproducto: "Monitor",
            precio: 38000.99
            }
        ];
    });

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [mostrarIVA, setMostrarIVA] = useState(false);

    const manejarFormulario = () => {
        if (!nombre || !precio) return;

        const nuevoProducto = {
            id: productos.length + 1,
            nproducto: nombre,
            precio: parseFloat(precio)
        };

        setProductos([nuevoProducto, ...productos]);
        setNombre("");
        setPrecio("");
        setMostrarIVA(false);
    };

    const productosAMostrar = mostrarIVA
        ? productos.map(p => ({
              ...p,
              precio: (p.precio * 1.21).toFixed(2)
          }))
        : productos;

    return (
        <>
            <div className="Titulo">
                <h1>Agregar Productos</h1>
            </div>

            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Producto:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label>Precio:</label>
                    <input
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />

                    <button type="button" onClick={manejarFormulario}>
                        Guardar Producto
                    </button>
                </form>
            </div>

            <h3>Listado de Productos</h3>
            <ul>
                {productosAMostrar.map((p) => (
                    <li key={p.id}>{p.nproducto} - ${p.precio}</li>
                ))}
            </ul>

            <button type="button" onClick={() => setMostrarIVA(true)}>
                Mostrar con IVA
            </button>
        </>
    );
}

export default Producto;