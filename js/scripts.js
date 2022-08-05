const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("totalCart").innerHTML = carrito.length

const productos = [
{id:5271, title:'Remera Nike', price: 7000},
{id:5275, title:'Remera Adidas', price:7500},
{id:2354, title:'Pantalon Adidas', price: 1500},
{id:3450, title:'Buzo Nike', price: 15000},
]
let cards = ''

productos.forEach ((producto) => {
    const addCartId = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
    <div class="card h-100">
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.title}</h5>
                
                ${producto.price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" id= "${addCartId}" >Add to cart</a></div>
        </div>
    </div>
</div> `
})



productos.forEach ((producto) => {
    const addCartId = `add-cart${producto.id}`
    document.getElementById(addCartId).onclick = () => {
        carrito.push(producto)
        document.getElementById("totalCart").innerHTML = carrito.length
        localStorage.setItem("carrito", JSON.stringify(carrito))
        console.log(carrito)
    }
})

function carritoCompra(){
    carrito.forEach((producto) => {
        document.getElementById("pedro").innerHTML += `<div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
            </div>
            <div class="ms-3">
              <h5>${producto.title}</h5>
              
            </div>
          </div>
          <div class="d-flex flex-row align-items-center">
            <div style="width: 50px;">
              <h5 class="fw-normal mb-0">2</h5>
            </div>
            <div style="width: 80px;">
              <h5 class="mb-0">${producto.price}</h5>
            </div>
            <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
          </div>
        </div>
      </div>`
    })
}






