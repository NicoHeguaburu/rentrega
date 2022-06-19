// CONSTRUCTOR
class Productos {
    constructor(articulo, precio, color) {
        this.articulo = articulo;
        this.precio = parseFloat(precio);
        this.color = color;
    }
}
const listaProductos = [];
listaProductos.push(new Productos("mesita", "2000", "celeste"));
listaProductos.push(new Productos("cuadro", "600", "blanco"));
listaProductos.push(new Productos("bandeja", "200", "gris"));
listaProductos.push(new Productos("centro de mesa", "850", "marron"));

buscar();

function buscar() {
    let filtrado = prompt("Filtra por nombre, precio o color");
    if (filtrado == "nombre") {
        let busqueda = prompt("busca entre mesita, cuadro, bandeja y centro de mesa y ve los resultados por consola");
        let arregloNombres = listaProductos.filter(function(objeto) {
            return (objeto.articulo == busqueda);
        })
        console.log(arregloNombres);
    } else if (filtrado == "precio") {
        let busqueda = prompt("busca por los siguientes precios 200, 600, 850 2000");
        let arregloPrecios = listaProductos.filter(function(objeto) {
            return (objeto.precio == busqueda);
        })
        console.log(arregloPrecios);
    } else if (filtrado == "color") {
        let busqueda = prompt("busca por los colores celeste, blanco, gris y marron");
        let arregloColor = listaProductos.filter(function(objeto) {
            return (objeto.color == busqueda);
        })
        console.log(arregloColor);
    }
}