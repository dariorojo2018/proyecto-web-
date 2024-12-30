function verCarrito() {
    const carritoCompras =  document.getElementsByClassName("contenedor-carrito")[0];
    if (carritoCompras.style.visibility =="hidden") {
        carritoCompras.style.visibility = "visible"
    } else {
        carritoCompras.style.visibility = "hidden";
    }
    
}