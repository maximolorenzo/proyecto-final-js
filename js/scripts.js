const carritoDeCompra = []

const productos = [
{id:5271, title:'Remera Nike', price: 7000},
{id:5275, title:'Remera Adidas', price:7500},
{id:2354, title:'Pantalon Adidas', price: 1500},
{id:3450, title:'Buzo Nike', price: 15000},
]
let cards = ''

productos.forEach ((producto) => {
    cards += `<div class="col mb-5">
    <div class="card h-100">
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${producto.title}</h5>
                <!-- Product price-->
                <span class="text-muted text-decoration-line-through">${producto.price}</span>
                $25.00
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
    </div>
</div> `
})



function AgregarAlCarrito(tituloProducto) {
    alert("agregado" +tituloProducto)
}


document.getElementById("seccion-card").innerHTML = cards






