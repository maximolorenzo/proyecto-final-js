class Producto{ 
    constructor(id,nombre,price, stock){
    this.id = id
    this.nombre = nombre
    this.price = price
    this.stock = stock
    
}
}

let productos = []
productos.push (new Producto(5271,'Remera Nike',7000,50))
productos.push (new Producto(5275,'Remera Adidas',7500,60))
productos.push (new Producto(2354,'Pantalon Adidas',1500,25))
productos.push (new Producto(3450,'Buzo Nike',15000,35))


const carritoDeCompra = []

function AgregarAlCarrito(producto) {
    if (producto.cantidad <= 0) {
        alert('no hay stock')
        return 
    }
    const productoEncontrado = productos.find((el) => el.id === producto.id )
    if (productoEncontrado && producto.cantidad > productoEncontrado.stock) {
        if(productoEncontrado){
            alert("este producto no existe mas ")
        }else{
            alert('la cantidad que desea comprar supera al stock')
        } 
        return
        
    }
    carritoDeCompra.push (new Producto(producto.id,productoEncontrado.nombre,productoEncontrado.precio,producto.cantidad))
    productos = productos.map ((el) => {
        if(el.id == productoEncontrado.id ){
            el.stock -= producto.cantidad; 
        }
        return el
    
    })
    
    
    console.log(productos)
}

AgregarAlCarrito ({id: 5271, cantidad: 2})
// AgregarAlCarrito ({id: 5275, nombre: 'Remera Adidas', price: 7000, stock: 4})
// AgregarAlCarrito ({id: 2354, nombre: 'Pantalon Adidas', price: 7000, stock: 3})
// AgregarAlCarrito ({id: 3450, nombre: 'Remera Nike', price: 7000, stock: 2})


